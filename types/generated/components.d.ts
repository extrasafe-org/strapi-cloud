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

export interface BlocksBlockDotList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_dot_lists';
  info: {
    description: '';
    displayName: 'Block-dot-list';
  };
  attributes: {
    block_dot_list: Schema.Attribute.Component<'shared.block-dot-list', true> &
      Schema.Attribute.Required;
    list_subtitle: Schema.Attribute.String;
  };
}

export interface BlocksBlockDotListWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_dot_list_with_titles';
  info: {
    description: '';
    displayName: 'Block-dot-list-with-title';
  };
  attributes: {
    list_block: Schema.Attribute.Component<'shared.list-block', true>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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

export interface BlocksBlockSocialPost extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_social_posts';
  info: {
    displayName: 'Block-social-post';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksBlockWithTopBorder extends Struct.ComponentSchema {
  collectionName: 'components_blocks_block_with_top_borders';
  info: {
    displayName: 'Block-with-top-border';
  };
  attributes: {
    isBold: Schema.Attribute.Boolean & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
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

export interface BlocksFaqLeft extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_lefts';
  info: {
    description: '';
    displayName: 'FaqTabBlock';
  };
  attributes: {
    faq_list_item: Schema.Attribute.Component<'landing.faq-list-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface BlocksTableList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_table_lists';
  info: {
    displayName: 'TableList';
  };
  attributes: {
    isExtraSafeChecked: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    isZoomChecked: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsCarouselList extends Struct.ComponentSchema {
  collectionName: 'components_components_carousel_lists';
  info: {
    displayName: 'CarouselList';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsDownloadItem extends Struct.ComponentSchema {
  collectionName: 'components_components_download_items';
  info: {
    displayName: 'DownloadItem';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsDownloadList extends Struct.ComponentSchema {
  collectionName: 'components_components_download_lists';
  info: {
    displayName: 'DownloadList';
  };
  attributes: {
    DownloadsItem: Schema.Attribute.Component<'components.download-item', true>;
  };
}

export interface ComponentsIconsBlockItem extends Struct.ComponentSchema {
  collectionName: 'components_components_icons_block_items';
  info: {
    displayName: 'IconsBlockItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsIconsListSubsection extends Struct.ComponentSchema {
  collectionName: 'components_components_icons_list_subsections';
  info: {
    description: '';
    displayName: 'IconsListSubsection';
  };
  attributes: {
    bottom_text: Schema.Attribute.Text;
    CardsList: Schema.Attribute.Component<'shared.card', true> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_components_image_blocks';
  info: {
    displayName: 'ImageBlock';
  };
  attributes: {};
}

export interface ComponentsListBlock extends Struct.ComponentSchema {
  collectionName: 'components_components_list_blocks';
  info: {
    description: '';
    displayName: 'ListBlock';
  };
  attributes: {
    IconsBlockItem: Schema.Attribute.Component<
      'components.icons-block-item',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsMediaList extends Struct.ComponentSchema {
  collectionName: 'components_components_media_lists';
  info: {
    description: '';
    displayName: 'MediaList';
  };
  attributes: {};
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
    page_path: Schema.Attribute.Enumeration<
      [
        'secure-video-call',
        'screen-sharing',
        'encrypted-messaging',
        'free-video-conferencing',
      ]
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Unique;
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

export interface SectionBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_section_banner_sections';
  info: {
    description: '';
    displayName: 'BannerSection';
  };
  attributes: {
    bottom_text: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionBannerWithButtonSection extends Struct.ComponentSchema {
  collectionName: 'components_section_banner_with_button_sections';
  info: {
    description: '';
    displayName: 'BannerWithButtonSection';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionBannerWithMediaSection extends Struct.ComponentSchema {
  collectionName: 'components_section_banner_with_media_sections';
  info: {
    displayName: 'BannerWithMediaSection';
  };
  attributes: {
    bottom_text: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionBrowserLiteHero extends Struct.ComponentSchema {
  collectionName: 'components_section_browser_lite_heroes';
  info: {
    description: '';
    displayName: 'BrowserLiteHero';
  };
  attributes: {
    bottom_text: Schema.Attribute.Text & Schema.Attribute.Required;
    icons_list: Schema.Attribute.Component<'landing.icons-list', false> &
      Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionCardsListSection extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_list_sections';
  info: {
    description: '';
    displayName: 'CardsListSection';
  };
  attributes: {
    CardsList: Schema.Attribute.Component<'shared.card', true> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionCarouselSection extends Struct.ComponentSchema {
  collectionName: 'components_section_carousel_sections';
  info: {
    displayName: 'CarouselSection';
  };
  attributes: {
    CarouselList: Schema.Attribute.Component<'components.carousel-list', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionComingNextSection extends Struct.ComponentSchema {
  collectionName: 'components_section_coming_next_sections';
  info: {
    description: '';
    displayName: 'IconsListSection';
  };
  attributes: {
    app_store_link: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    google_play_link: Schema.Attribute.String;
    IconsBlock: Schema.Attribute.Component<'components.list-block', false> &
      Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_section_faq_sections';
  info: {
    description: '';
    displayName: 'FaqSection';
  };
  attributes: {
    faq_list_item: Schema.Attribute.Component<'landing.faq-list-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionFaqTabSection extends Struct.ComponentSchema {
  collectionName: 'components_section_faq_tab_sections';
  info: {
    description: '';
    displayName: 'FaqTabSection';
  };
  attributes: {
    FaqLeft: Schema.Attribute.Component<'blocks.faq-left', false> &
      Schema.Attribute.Required;
    FaqRight: Schema.Attribute.Component<'blocks.faq-left', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_section_features_sections';
  info: {
    description: '';
    displayName: 'FeaturesSection';
  };
  attributes: {
    FeaturesList: Schema.Attribute.Component<'shared.features-list', true> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionFormSection extends Struct.ComponentSchema {
  collectionName: 'components_section_form_sections';
  info: {
    description: '';
    displayName: 'FormSection';
  };
  attributes: {
    button_text: Schema.Attribute.String & Schema.Attribute.Required;
    successfully_submission_text: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionLinkedinSocialSection extends Struct.ComponentSchema {
  collectionName: 'components_section_linkedin_social_sections';
  info: {
    description: '';
    displayName: 'LinkedinSocialSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    widget_id: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionMediaHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_media_hero_sections';
  info: {
    description: '';
    displayName: 'MediaHeroSection';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionMediaHeroSectionWithLinks
  extends Struct.ComponentSchema {
  collectionName: 'components_section_media_hero_section_with_links';
  info: {
    displayName: 'MediaHeroSectionWithLinks';
  };
  attributes: {
    app_store_link: Schema.Attribute.String;
    google_play_link: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    second_subtitle: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionMediaListBlockSection extends Struct.ComponentSchema {
  collectionName: 'components_section_media_list_block_sections';
  info: {
    description: '';
    displayName: 'MediaListBlockSection';
  };
  attributes: {
    bottom_text: Schema.Attribute.Text;
    MediaList: Schema.Attribute.Component<'shared.media-list-item', true> &
      Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionMediaSection extends Struct.ComponentSchema {
  collectionName: 'components_section_media_sections';
  info: {
    description: '';
    displayName: 'MediaSection';
  };
  attributes: {
    DownloadList: Schema.Attribute.Component<'shared.download-list', true> &
      Schema.Attribute.Required;
    MediaListBlock: Schema.Attribute.Component<'shared.media-list', false> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionMediaSidedSection extends Struct.ComponentSchema {
  collectionName: 'components_section_media_sided_sections';
  info: {
    displayName: 'MediaSidedSection';
  };
  attributes: {
    is_media_right_aligned: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionMediaWithTextSection extends Struct.ComponentSchema {
  collectionName: 'components_section_media_with_text_sections';
  info: {
    displayName: 'MediaWithTextSection';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionSecondFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_section_second_features_sections';
  info: {
    description: '';
    displayName: 'SecondFeaturesSection';
  };
  attributes: {
    features_list: Schema.Attribute.Component<'landing.features-list', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionSecureSection extends Struct.ComponentSchema {
  collectionName: 'components_section_secure_sections';
  info: {
    displayName: 'SecureSection';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionSoonSection extends Struct.ComponentSchema {
  collectionName: 'components_section_soon_sections';
  info: {
    displayName: 'SoonSection';
  };
  attributes: {
    app_store_link: Schema.Attribute.String;
    google_play_link: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionStepsSection extends Struct.ComponentSchema {
  collectionName: 'components_section_steps_sections';
  info: {
    description: '';
    displayName: 'StepsSection';
  };
  attributes: {
    CarouselList: Schema.Attribute.Component<'components.carousel-list', true> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionTableSection extends Struct.ComponentSchema {
  collectionName: 'components_section_table_sections';
  info: {
    description: '';
    displayName: 'TableSection';
  };
  attributes: {
    IconsListSubsection: Schema.Attribute.Component<
      'components.icons-list-subsection',
      false
    > &
      Schema.Attribute.Required;
    TableList: Schema.Attribute.Component<'blocks.table-list', true> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionTechnologySection extends Struct.ComponentSchema {
  collectionName: 'components_section_technology_sections';
  info: {
    description: '';
    displayName: 'TechnologySection';
  };
  attributes: {
    IconsBlockItem: Schema.Attribute.Component<
      'components.icons-block-item',
      true
    > &
      Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionXSocialSection extends Struct.ComponentSchema {
  collectionName: 'components_section_x_social_sections';
  info: {
    description: '';
    displayName: 'XSocialSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    widget_id: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionYoutubeSocialSection extends Struct.ComponentSchema {
  collectionName: 'components_section_youtube_social_sections';
  info: {
    description: '';
    displayName: 'YoutubeSocialSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    widget_id: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBlockDotList extends Struct.ComponentSchema {
  collectionName: 'components_shared_block_dot_lists';
  info: {
    description: '';
    displayName: 'block_dot_list';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedBlockList extends Struct.ComponentSchema {
  collectionName: 'components_shared_block_lists';
  info: {
    displayName: 'block_list';
  };
  attributes: {
    block_dot_list: Schema.Attribute.Component<'shared.block-dot-list', true>;
    subtitle: Schema.Attribute.String;
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

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedDownloadList extends Struct.ComponentSchema {
  collectionName: 'components_shared_download_lists';
  info: {
    displayName: 'DownloadList';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    link_text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeaturesList extends Struct.ComponentSchema {
  collectionName: 'components_shared_features_lists';
  info: {
    displayName: 'features_list';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedListBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_blocks';
  info: {
    description: '';
    displayName: 'list_block';
  };
  attributes: {
    block_dot_list: Schema.Attribute.Component<'shared.block-dot-list', true> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
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

export interface SharedMediaList extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_lists';
  info: {
    description: '';
    displayName: 'media_list';
  };
  attributes: {
    MediaList: Schema.Attribute.Component<'shared.media-list-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SharedMediaListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_list_items';
  info: {
    description: '';
    displayName: 'media_list_item';
  };
  attributes: {
    date: Schema.Attribute.Date;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'>;
    media: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
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
      'blocks.block-dot-list': BlocksBlockDotList;
      'blocks.block-dot-list-with-title': BlocksBlockDotListWithTitle;
      'blocks.block-heading': BlocksBlockHeading;
      'blocks.block-image': BlocksBlockImage;
      'blocks.block-list': BlocksBlockList;
      'blocks.block-social-post': BlocksBlockSocialPost;
      'blocks.block-with-top-border': BlocksBlockWithTopBorder;
      'blocks.block-youtube': BlocksBlockYoutube;
      'blocks.faq-left': BlocksFaqLeft;
      'blocks.quote': BlocksQuote;
      'blocks.table-list': BlocksTableList;
      'components.carousel-list': ComponentsCarouselList;
      'components.download-item': ComponentsDownloadItem;
      'components.download-list': ComponentsDownloadList;
      'components.icons-block-item': ComponentsIconsBlockItem;
      'components.icons-list-subsection': ComponentsIconsListSubsection;
      'components.image-block': ComponentsImageBlock;
      'components.list-block': ComponentsListBlock;
      'components.media-list': ComponentsMediaList;
      'landing.faq-list': LandingFaqList;
      'landing.faq-list-item': LandingFaqListItem;
      'landing.features-list': LandingFeaturesList;
      'landing.features-list-item': LandingFeaturesListItem;
      'landing.icons-list': LandingIconsList;
      'section.banner-section': SectionBannerSection;
      'section.banner-with-button-section': SectionBannerWithButtonSection;
      'section.banner-with-media-section': SectionBannerWithMediaSection;
      'section.browser-lite-hero': SectionBrowserLiteHero;
      'section.cards-list-section': SectionCardsListSection;
      'section.carousel-section': SectionCarouselSection;
      'section.coming-next-section': SectionComingNextSection;
      'section.faq-section': SectionFaqSection;
      'section.faq-tab-section': SectionFaqTabSection;
      'section.features-section': SectionFeaturesSection;
      'section.form-section': SectionFormSection;
      'section.linkedin-social-section': SectionLinkedinSocialSection;
      'section.media-hero-section': SectionMediaHeroSection;
      'section.media-hero-section-with-links': SectionMediaHeroSectionWithLinks;
      'section.media-list-block-section': SectionMediaListBlockSection;
      'section.media-section': SectionMediaSection;
      'section.media-sided-section': SectionMediaSidedSection;
      'section.media-with-text-section': SectionMediaWithTextSection;
      'section.second-features-section': SectionSecondFeaturesSection;
      'section.secure-section': SectionSecureSection;
      'section.soon-section': SectionSoonSection;
      'section.steps-section': SectionStepsSection;
      'section.table-section': SectionTableSection;
      'section.technology-section': SectionTechnologySection;
      'section.x-social-section': SectionXSocialSection;
      'section.youtube-social-section': SectionYoutubeSocialSection;
      'shared.block-dot-list': SharedBlockDotList;
      'shared.block-list': SharedBlockList;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.download-list': SharedDownloadList;
      'shared.features-list': SharedFeaturesList;
      'shared.header-a': SharedHeaderA;
      'shared.icons-list-item': SharedIconsListItem;
      'shared.list-block': SharedListBlock;
      'shared.list-item': SharedListItem;
      'shared.logo': SharedLogo;
      'shared.media': SharedMedia;
      'shared.media-list': SharedMediaList;
      'shared.media-list-item': SharedMediaListItem;
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
