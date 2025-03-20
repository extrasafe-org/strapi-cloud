import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlockBigHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_big_headings';
  info: {
    description: '';
    displayName: 'block-big-heading';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksBlockHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_headings';
  info: {
    description: '';
    displayName: 'block-heading';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksBlockImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_images';
  info: {
    displayName: 'Block-image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BlocksBlockList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_lists';
  info: {
    description: '';
    displayName: 'block-list';
  };
  attributes: {
    list_item: Schema.Attribute.Component<'shared.list-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface BlocksBlockYoutube extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_youtubes';
  info: {
    displayName: 'Block-youtube';
  };
  attributes: {
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BlocksQuote extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quotes';
  info: {
    description: '';
    displayName: 'Block-quote';
  };
  attributes: {
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LandingFaqList extends Struct.ComponentSchema {
  collectionName: 'components_landing_faq_lists';
  info: {
    displayName: 'faq_list';
  };
  attributes: {
    faq_list_item: Schema.Attribute.Component<'landing.faq-list-item', true> &
      Schema.Attribute.Required;
  };
}

export interface LandingFaqListItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_faq_list_items';
  info: {
    displayName: 'faq_list_item';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingFeaturesList extends Struct.ComponentSchema {
  collectionName: 'components_landing_features_lists';
  info: {
    displayName: 'features_list';
  };
  attributes: {
    features_list_item: Schema.Attribute.Component<
      'landing.features-list-item',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface LandingFeaturesListItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_features_list_items';
  info: {
    description: '';
    displayName: 'features_list_item';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingIconsList extends Struct.ComponentSchema {
  collectionName: 'components_landing_icons_lists';
  info: {
    displayName: 'IconsList';
  };
  attributes: {
    icons_list_item: Schema.Attribute.Component<
      'shared.icons-list-item',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

export interface SharedHeaderA extends Struct.ComponentSchema {
  collectionName: 'components_shared_header_as';
  info: {
    description: '';
    displayName: 'Header-A';
  };
  attributes: {
    HeaderLogoA: Schema.Attribute.Component<'shared.logo', true>;
  };
}

export interface SharedIconsListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons_list_items';
  info: {
    displayName: 'icons_list_item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    icon_text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    description: '';
    displayName: 'ListItem';
  };
  attributes: {
    item_text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    ButtonText: Schema.Attribute.Component<'shared.button', true>;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MenuItem1: Schema.Attribute.Component<'shared.menu-item', true>;
    MenuItem2: Schema.Attribute.Component<'shared.menu-item', true>;
    MenuItem3: Schema.Attribute.Component<'shared.menu-item', true>;
    NavigationMenu: Schema.Attribute.Component<'shared.menu', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {};
}

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTemplate extends Struct.ComponentSchema {
  collectionName: 'components_shared_templates';
  info: {
    description: '';
    displayName: 'Priority';
    icon: 'bulletList';
  };
  attributes: {
    Value: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 10000;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedTemplateLanding extends Struct.ComponentSchema {
  collectionName: 'components_shared_template_landings';
  info: {
    displayName: 'TemplateLanding';
  };
  attributes: {
    Template: Schema.Attribute.Enumeration<['With Video', 'Without Video']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.block-big-heading': BlocksBlockBigHeading;
      'blocks.block-heading': BlocksBlockHeading;
      'blocks.block-image': BlocksBlockImage;
      'blocks.block-list': BlocksBlockList;
      'blocks.block-youtube': BlocksBlockYoutube;
      'blocks.quote': BlocksQuote;
      'landing.faq-list': LandingFaqList;
      'landing.faq-list-item': LandingFaqListItem;
      'landing.features-list': LandingFeaturesList;
      'landing.features-list-item': LandingFeaturesListItem;
      'landing.icons-list': LandingIconsList;
      'shared.button': SharedButton;
      'shared.header-a': SharedHeaderA;
      'shared.icons-list-item': SharedIconsListItem;
      'shared.list-item': SharedListItem;
      'shared.logo': SharedLogo;
      'shared.media': SharedMedia;
      'shared.menu': SharedMenu;
      'shared.menu-item': SharedMenuItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.template': SharedTemplate;
      'shared.template-landing': SharedTemplateLanding;
    }
  }
}
