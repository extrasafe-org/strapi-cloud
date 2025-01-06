import React, { useMemo } from 'react';
import { Field, Flex } from '@strapi/design-system';
import ReactSelect from './ReactSelect';
import { useField } from '@strapi/strapi/admin';
import { useIntl } from 'react-intl';

const MultiSelect = ({
  hint,
  label,
  name,
  intlLabel,
  required,
  attribute,
  description,
  placeholder,
  disabled,
}: {
  hint: string;
  label: string;
  name: string;
  intlLabel: any;
  required: boolean;
  attribute: any;
  description: any;
  placeholder: string;
  disabled: boolean;
}) => {
  const { formatMessage } = useIntl();
  const { onChange, value, error } = useField(name);

  const possibleOptions: { value: string; label: string }[] = useMemo(() => {
    return [
      { label: 'Select All', value: 'select_all' },
      ...(attribute['options'] || [])
        .map((option: string) => {
          const [label, value] = [...option.split(/:(.*)/s), option];
          return { label, value };
        })
        .filter(Boolean) as { value: string; label: string }[],
    ];
  }, [attribute]);

  const sanitizedValue = useMemo(() => {
    let parsedValue: string[];
    try {
      parsedValue = typeof value !== 'string' ? value || [] : JSON.parse(value || '[]');
    } catch (e) {
      parsedValue = [];
    }

    if (parsedValue.includes('select_all')) {
      return possibleOptions.filter(({ value }) => value !== 'select_all');
    }

    return parsedValue
      .map((val) =>
        possibleOptions.find((option) => option.value === val)
      )
      .filter(Boolean) as { value: string; label: string }[];
  }, [value, possibleOptions]);

  const handleChange = (val: { value: string; label: string }[]) => {
    const values = val.map((v) => v.value);

    if (values.includes('select_all')) {
      onChange({
        target: {
          name: name,
          value: JSON.stringify(
            possibleOptions.map((o) => o.value).filter((v) => v !== 'select_all')
          ),
          type: attribute.type,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    } else {
      onChange({
        target: {
          name: name,
          value: JSON.stringify(values),
          type: attribute.type,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <Field.Root
      hint={description?.id ? formatMessage(description) : hint}
      error={error}
      name={name}
      required={required}
    >
      <Flex direction="column" alignItems="stretch" gap={1}>
        <Field.Label>{intlLabel?.id ? formatMessage(intlLabel) : label}</Field.Label>
        <ReactSelect
          isSearchable
          isMulti
          placeholder={placeholder}
          options={possibleOptions}
          value={sanitizedValue}
          onChange={handleChange}
          isDisabled={disabled || possibleOptions.length === 0}
        />
        <Field.Hint />
        <Field.Error />
      </Flex>
    </Field.Root>
  );
};

export default MultiSelect;
