import Select from 'react-select';
import styled from 'styled-components';


const ReactSelect = ({ components, styles, error, ariaErrorMessage, ...props }: any) => {
  return (
    <Select
      menuPosition="fixed"
      components={{
        IndicatorSeparator: () => null,
        LoadingIndicator: () => null,
        ...components,
      }}
      aria-errormessage={error && ariaErrorMessage}
      aria-invalid={!!error}
      styles={{
        control: (base) => ({
          ...base,
          background: '#CCCCCC',
          borderColor: '#4945FF',
          color: '#ffffff',
          fontSize: '16px',
          ':hover': {
            borderColor: '#555555',
          },
        }),
        menu: (base) => ({
          ...base,
          background: '#CCCCCC',
          color: '#ffffff',
          fontSize: '16px',
        }),
        option: (base, state) => ({
          ...base,
          background: state.isFocused ? '#FFFFFF' : '#CCCCCC',
          color: state.isFocused ? '#32324d' : '#32324d',
          fontSize: '16px',
          ':active': {
            background: '#444444',
          },
        }),
        placeholder: (base) => ({
          ...base,
          color: '#999999',
          fontSize: '16px', // Font size for placeholder
        }),
        multiValue: (base) => ({
          ...base,
          background: '#444444',
          color: '#ffffff',
          borderRadius: '4px',
          fontSize: '16px', // Font size for selected values
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: '#ffffff',
          fontSize: '16px', // Font size for multi-value labels
        }),
        multiValueRemove: (base) => ({
          ...base,
          color: '#cccccc',
          fontSize: '16px', // Font size for remove button
          ':hover': {
            background: '#555555',
            color: '#ffffff',
          },
        }),
      }}
      {...props}
    />
  );
};

const StyledReactSelect = styled(ReactSelect)`
  .select-control {
    height: auto;
    background: ${({ theme }) => theme.colors.neutral800};
    border: 1px solid ${({ theme }) => theme.colors.neutral600};
    border-radius: 4px;

    & > div:first-child {
      padding: 8px;
      gap: 8px;
      font-size: 16px; // Font size for control items
    }

    .select-multi-value-container {
      margin-right: -8px;
    }

    & [aria-disabled='true'] {
      background: ${({ theme }) => theme.colors.neutral700};
      border: 1px solid ${({ theme }) => theme.colors.neutral600};
    }
  }

  .select-menu {
    background: ${({ theme }) => theme.colors.neutral800};
    border: 1px solid ${({ theme }) => theme.colors.neutral600};
    max-height: 300px;
    overflow-y: auto;

    .option {
      background: ${({ theme }) => theme.colors.neutral800};
      color: ${({ theme }) => theme.colors.neutral200};
      padding: 8px;
      cursor: pointer;
      font-size: 16px; // Font size for menu options

      &:hover {
        background: ${({ theme }) => theme.colors.primary600};
        color: ${({ theme }) => theme.colors.neutral0};
      }
    }

    .option-focused {
      background: ${({ theme }) => theme.colors.primary600};
      color: ${({ theme }) => theme.colors.neutral0};
    }
  }

  .select-placeholder {
    color: ${({ theme }) => theme.colors.neutral400};
    font-size: 16px; // Font size for placeholder
  }

  .select-multi-value {
    background: ${({ theme }) => theme.colors.neutral700};
    color: ${({ theme }) => theme.colors.neutral100};
    border-radius: 4px;
    padding: 2px 8px;
    margin: 2px;
    font-size: 16px; // Font size for selected values
  }

  .select-multi-value-remove {
    color: ${({ theme }) => theme.colors.neutral300};
    font-size: 16px; // Font size for remove button
    &:hover {
      background: ${({ theme }) => theme.colors.neutral600};
      color: ${({ theme }) => theme.colors.neutral0};
    }
  }
`;

export default StyledReactSelect;
