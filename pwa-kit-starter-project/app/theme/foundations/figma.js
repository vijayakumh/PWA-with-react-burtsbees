import data from '../../../figmaData/tokens.json'

let figmaData = data.global
console.log(figmaData.breakpoints.sm, 'some data')
// console.log(figmaData.PLP.breadcrumb.fontSize.value, "PLP changes checking");
const figmaColors = {
    figmaBackgroundColor: figmaData.color.backgroundColor.value,
    figmaTextColor: figmaData.color.globalTextColor.value,
    promoBannerBackground: figmaData.color.promoBackground.value,
    headerBackground: figmaData.color.headerBackround.value,
    footerBackground: figmaData.color.footerBackground.value,
    buttonBackground: figmaData.buttons.background.value,
    buttonTextColor: figmaData.buttons.color.value,
    buttonHoverBackground: figmaData.buttons.hoverBackground.value,
    buttonHoverTextColor: figmaData.buttons.hoverColor.value,
    buttonDisabledBackground: figmaData.buttons.disabledBackground.value,
    buttonDisabledTextColor: figmaData.buttons.disabledColor.value,
    filterSectionBorderStyles: figmaData.color.filterSectionBorderColor.value,
    linkTextColor: figmaData.color.linkTextColor.value,
    // filterSectionBackground: figmaData.color.plpFilterSectionBackground.value,
    breadCrumbFontSize: figmaData.PLP.breadcrumb.fontSize.value,
    breadCrumbFontWeight: figmaData.PLP.breadcrumb.fontWeight.value,
    breadCrumbColor: figmaData.PLP.breadcrumb.color.value,
    plpFilterHeadingFontSize: figmaData.PLP.filterHeading.fontSize.value,
    plpFilterHeadingFontWeight: figmaData.PLP.filterHeading.fontWeight.value,
    plpFilterHeadingColor: figmaData.PLP.filterHeading.color.value,
    plpFilterSectionBackground: figmaData.PLP.filterSection.background.value,
    plpFilterSectionBorder: figmaData.PLP.filterSection.border.value,
    plpFilterSubHeadingFontSize: figmaData.PLP.filterSubHeading.fontSize.value,
    plpFilterSubHeadingFontWeight: figmaData.PLP.filterSubHeading.fontWeight.value,
    plpFilterSubHeadingColor: figmaData.PLP.filterSubHeading.color.value,
    plpFilterContentColor: figmaData.PLP.filterContent.color.value,
    plpFilterContentFontSize: figmaData.PLP.filterContent.fontSize.value,
    plpFilterContentFontWeight: figmaData.PLP.filterContent.fontWeight.value,
    plpTileBackground: figmaData.PLP.Tile.background.value,
    plpTileprodNameColor: figmaData.PLP.Tile.prod.name.color.value,
    plpTileprodNameFontSize: figmaData.PLP.Tile.prod.name.fontSize.value,
    plpTileprodNameFontWeight: figmaData.PLP.Tile.prod.name.fontWeight.value,
    plpTileprodPriceColor: figmaData.PLP.Tile.prod.price.color.value,
    plpTileprodPriceFontSize: figmaData.PLP.Tile.prod.price.fontSize.value,
    plpTileprodPriceFontWeight: figmaData.PLP.Tile.prod.price.fontWeight.value,
    plpTileBorderRadius: figmaData.PLP.Tile.borderRadius.value,
    plpTileBoxShadow: figmaData.PLP.Tile.boxShadow.value,
    plpTileHoverScale: figmaData.PLP.TileHover.scale.value,

    //breakpoints
    breakpointSm: figmaData.breakpoints.sm.value,
    breakpointMd: figmaData.breakpoints.md.value,
    breakpointLg: figmaData.breakpoints.lg.value,
    breakpointXl: figmaData.breakpoints.xl.value,
    breakpointXxl: figmaData.breakpoints.xxl.value,
    breakpointXxxl: figmaData.breakpoints.xxxl.value
}

export default figmaColors
