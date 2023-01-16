/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'

// Components
import {
    Flex,
    IconButton,

    // Hooks
    useMultiStyleConfig
} from '@chakra-ui/react'

// Icons
import {
    SocialFacebookIcon,
    SocialInstagramIcon,
    SocialPinterestIcon,
    SocialTwitterIcon,
    SocialYoutubeIcon,
    BurtsFooterTicktock,
    BurtsFooterInstagram,
    BurtsFooterFacebook,
    BurtsFooterYoutube,
    BurtsFooterTwitter,
    BurtsFooterPinterest
} from '../../components/icons'

/**
 *
 */
const SocialIcons = ({variant, pinterestInnerColor = 'white', ...otherProps}) => {
    const styles = useMultiStyleConfig('SocialIcons', {variant})

    return (
        <Flex
            className="sf-social-icons"
            {...styles.container}
            sx={{'--pinterest-icon-inner': pinterestInnerColor}}
            {...otherProps}
        >
            {/* Social Links */}
            {[
                {
                    href: 'https://www.tictock.com',
                    icon: BurtsFooterTicktock,
                    ariaLabel: 'Tictock'
                },
                {
                    href: 'https://www.instagram.com/commercecloud/?hl=en',
                    icon: BurtsFooterInstagram,
                    ariaLabel: 'Instagram'
                },
                {
                    href: 'https://www.facebook.com',
                    icon: BurtsFooterFacebook,
                    ariaLabel: 'facebook'
                },
                {
                    href: 'https://youtube.com',
                    icon: BurtsFooterYoutube,
                    ariaLabel: 'Youtube'
                },
                {
                    href: 'https://www.twitter.com',
                    icon: BurtsFooterTwitter,
                    ariaLabel: 'Twitter'
                },
                {
                    href: 'https://www.pinterest.com',
                    icon: BurtsFooterPinterest,
                    ariaLabel: 'Pinterest'
                }
            ].map(({href, icon, ariaLabel}) => (
                <IconButton
                    {...styles.item}
                    key={href}
                    icon={React.createElement(icon, styles.icon)}
                    variant="unstyled"
                    onClick={() => {
                        window.open(href)
                    }}
                    aria-label={ariaLabel}
                />
            ))}
        </Flex>
    )
}

SocialIcons.displayName = 'SocialIcons'

SocialIcons.propTypes = {
    /**
     * This component has 3 variants, 'flex', 'flex-start' and 'flex-end'.
     * All will affect how the child icons are displayed. By default, it's
     * value is `flex`.
     */
    variant: PropTypes.string,

    /**
     * The inverse color of Pinterest icon's `currentColor`. For example, if the pinterest icon is white, then its inner 'p' is black.
     */
    pinterestInnerColor: PropTypes.string
}

export default SocialIcons
