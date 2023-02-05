/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {forwardRef} from 'react'
import {Icon, useTheme} from '@chakra-ui/react'

// Our own SVG imports. These will be extracted to a single sprite sheet by the
// svg-sprite-loader webpack plugin at build time and injected in the <body> tag
// during SSR.
// NOTE: Another solution would be to use `require-context.macro` package to accomplish
// importing icon svg's.
import '../../assets/svg/alert.svg'
import '../../assets/svg/account.svg'
import '../../assets/svg/basket.svg'
import '../../assets/svg/check.svg'
import '../../assets/svg/check-circle.svg'
import '../../assets/svg/chevron-up.svg'
import '../../assets/svg/chevron-down.svg'
import '../../assets/svg/chevron-right.svg'
import '../../assets/svg/chevron-left.svg'
import '../../assets/svg/chevron-right.svg'
import '../../assets/svg/chevron-up.svg'
import '../../assets/svg/dashboard.svg'
import '../../assets/svg/figma-logo.svg'
import '../../assets/svg/filter.svg'
import '../../assets/svg/file.svg'
import '../../assets/svg/flag-ca.svg'
import '../../assets/svg/flag-us.svg'
import '../../assets/svg/flag-gb.svg'
import '../../assets/svg/flag-fr.svg'
import '../../assets/svg/flag-it.svg'
import '../../assets/svg/flag-cn.svg'
import '../../assets/svg/flag-jp.svg'
import '../../assets/svg/github-logo.svg'
import '../../assets/svg/hamburger.svg'
import '../../assets/svg/info.svg'
import '../../assets/svg/social-facebook.svg'
import '../../assets/svg/social-instagram.svg'
import '../../assets/svg/social-twitter.svg'
import '../../assets/svg/social-youtube.svg'
import '../../assets/svg/like.svg'
import '../../assets/svg/lock.svg'
import '../../assets/svg/payment.svg'
import '../../assets/svg/plug.svg'
import '../../assets/svg/plus.svg'
import '../../assets/svg/receipt.svg'
import '../../assets/svg/search.svg'
import '../../assets/svg/signout.svg'
import '../../assets/svg/user.svg'
import '../../assets/svg/visibility.svg'
import '../../assets/svg/visibility-off.svg'
import '../../assets/svg/heart.svg'
import '../../assets/svg/heart-solid.svg'
import '../../assets/svg/close.svg'

//customization
import '../../assets/svg/user-white.svg'
import '../../assets/svg/cart-white.svg'
import '../../assets/svg/icon-search.svg'
import '../../assets/svg/burtslogo.svg'
import '../../assets/svg/cart-icon-mobile.svg'
import '../../assets/svg/burts-footer-logo.svg'
import '../../assets/svg/footersubscriptionarrow.svg'
import '../../assets/svg/burtstictock.svg'
import '../../assets/svg/burtsinstagram.svg'
import '../../assets/svg/burtsfacebook.svg'
import '../../assets/svg/burtsyoutube.svg'
import '../../assets/svg/burtstwitter.svg'
import '../../assets/svg/burtspinterest.svg'
import '../../assets/svg/burtsfooterUScountry.svg'
import '../../assets/svg/burtsfooteronetrustsite.svg'
import '../../assets/svg/burtshamburger.svg'

// For non-square SVGs, we can use the symbol data from the import to set the
// proper viewBox attribute on the Icon wrapper.
import AmexSymbol from '../../assets/svg/cc-amex.svg'
import BrandLogoSymbol from '../../assets/svg/brand-logo.svg'
import CVVSymbol from '../../assets/svg/cc-cvv.svg'
import DiscoverSymbol from '../../assets/svg/cc-discover.svg'
import LocationSymbol from '../../assets/svg/location.svg'
import MastercardSymbol from '../../assets/svg/cc-mastercard.svg'
import PaypalSymbol from '../../assets/svg/paypal.svg'
import SocialPinterestSymbol from '../../assets/svg/social-pinterest.svg'
import VisaSymbol from '../../assets/svg/cc-visa.svg'
import burtsBrandSymbol from '../../assets/svg/burtslogo.svg'

// TODO: We're hardcoding the `viewBox` for these imported SVGs temporarily as the
// SVG loader plugin is not properly providing us the symbol data on the client side.
AmexSymbol.viewBox = AmexSymbol.viewBox || '0 0 38 22'
BrandLogoSymbol.viewBox = BrandLogoSymbol.viewBox || '0 0 320 40'
CVVSymbol.viewBox = CVVSymbol.viewBox || '0 0 41 24'
DiscoverSymbol.viewBox = DiscoverSymbol.viewBox || '0 0 38 22'
LocationSymbol.viewBox = LocationSymbol.viewBox || '0 0 16 21'
MastercardSymbol.viewBox = MastercardSymbol.viewBox || '0 0 38 22'
PaypalSymbol.viewBox = PaypalSymbol.viewBox || '0 0 80 20'
SocialPinterestSymbol.viewBox = SocialPinterestSymbol.viewBox || '0 0 21 20'
VisaSymbol.viewBox = VisaSymbol.viewBox || '0 0 38 22'
burtsBrandSymbol.viewBox = burtsBrandSymbol.viewBox || '0 0 320 40'

/**
 * A helper for creating a Chakra-wrapped icon from our own SVG imports via sprite sheet.
 * @param {string} name - the filename of the imported svg (does not include extension)
 */
/* istanbul ignore next */
const icon = (name, passProps) => {
    const displayName = name
        .toLowerCase()
        .replace(/(?:^|[\s-/])\w/g, (match) => match.toUpperCase())
        .replace(/-/g, '')
    const component = forwardRef((props, ref) => {
        const theme = useTheme()
        const {baseStyle} = theme.components.Icon
        return (
            <Icon ref={ref} {...baseStyle} {...passProps} {...props}>
                <use role="presentation" xlinkHref={`#${name}`} />
            </Icon>
        )
    })
    component.displayName = `${displayName}Icon`
    return component
}

// Export Chakra icon components that use our SVG sprite symbol internally
// For non-square SVGs, we can use the symbol data from the import to set the
// proper viewBox attribute on the Icon wrapper.
export const AmexIcon = icon('cc-amex', {viewBox: AmexSymbol.viewBox})
export const AlertIcon = icon('alert')
export const AccountIcon = icon('account')
export const BrandLogo = icon('brand-logo', {viewBox: BrandLogoSymbol.viewBox})
export const BasketIcon = icon('basket')
export const CheckIcon = icon('check')
export const CheckCircleIcon = icon('check-circle')
export const ChevronDownIcon = icon('chevron-down')
export const ChevronLeftIcon = icon('chevron-left')
export const ChevronRightIcon = icon('chevron-right')
export const ChevronUpIcon = icon('chevron-up')
export const CVVIcon = icon('cc-cvv', {viewBox: CVVSymbol.viewBox})
export const DashboardIcon = icon('dashboard')
export const DiscoverIcon = icon('cc-discover', {viewBox: DiscoverSymbol.viewBox})
export const FigmaLogo = icon('figma-logo')
export const FilterIcon = icon('filter')
export const FileIcon = icon('file')
export const FlagCAIcon = icon('flag-ca')
export const FlagUSIcon = icon('flag-us')
export const FlagGBIcon = icon('flag-gb')
export const FlagFRIcon = icon('flag-fr')
export const FlagITIcon = icon('flag-it')
export const FlagCNIcon = icon('flag-cn')
export const FlagJPIcon = icon('flag-jp')
export const GithubLogo = icon('github-logo')
export const HamburgerIcon = icon('hamburger')
export const InfoIcon = icon('info')
export const LikeIcon = icon('like')
export const LockIcon = icon('lock')
export const LocationIcon = icon('location')
export const PaymentIcon = icon('payment')
export const PaypalIcon = icon('paypal', {viewBox: PaypalSymbol.viewBox})
export const PlugIcon = icon('plug')
export const PlusIcon = icon('plus')
export const MastercardIcon = icon('cc-mastercard', {viewBox: MastercardSymbol.viewBox})
export const ReceiptIcon = icon('receipt')
export const SearchIcon = icon('search')
export const SocialFacebookIcon = icon('social-facebook')
export const SocialInstagramIcon = icon('social-instagram')
export const SocialPinterestIcon = icon('social-pinterest', {
    viewBox: SocialPinterestSymbol.viewBox
})
export const SocialTwitterIcon = icon('social-twitter')
export const SocialYoutubeIcon = icon('social-youtube')
export const SignoutIcon = icon('signout')
export const UserIcon = icon('user')
export const VisaIcon = icon('cc-visa', {viewBox: VisaSymbol.viewBox})
export const VisibilityIcon = icon('visibility')
export const VisibilityOffIcon = icon('visibility-off')
export const HeartIcon = icon('heart')
export const HeartSolidIcon = icon('heart-solid')
export const CloseIcon = icon('close')

//customization
export const NewBrandLogo = icon('burtslogo', {viewBox: burtsBrandSymbol.viewBox})
export const AccountIconWhite = icon('user-white')
export const BasketIconWhite = icon('cart-white')
export const SearchIconBurts = icon('icon-search')
export const BasketIconWhiteMobile = icon('cart-icon-mobile')
export const BurtsNewFooterLogo = icon('burts-footer-logo')
export const Burtsfootersubscriptionarrow = icon('footersubscriptionarrow')
export const BurtsFooterTicktock = icon('burtstictock')
export const BurtsFooterInstagram = icon('burtsinstagram')
export const BurtsFooterFacebook = icon('burtsfacebook')
export const BurtsFooterYoutube = icon('burtsyoutube')
export const BurtsFooterTwitter = icon('burtstwitter')
export const BurtsFooterPinterest = icon('burtspinterest')
export const BurtsFooterUSCountry = icon('burtsfooterUScountry')
export const BurtsFooterOneTrustSiteBadge = icon('burtsfooteronetrustsite')
export const BurtsHamburger = icon('burtshamburger')
