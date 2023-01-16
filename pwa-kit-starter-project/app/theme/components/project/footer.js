/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    parts: [
        'container',
        'content',
        'subscribe',
        'subscribeField',
        'subscribeButtonContainer',
        'subscribeHeading',
        'subscribeMessage',
        'localeSelector',
        'bottomHalf',
        'horizontalRule',
        'copyright',
        'socialIcons',
        'textColor',
        'subscribeButtonContainerButton',
        'burtsFooterLogo',
        'burtsfooterButton',
        'linkedListStyle',
        'subscribeContainer',
        'footerlogoContainer'
    ],
    baseStyle: {
        container: {
            width: 'full',
            background: 'beige'
        },
        content: {
            maxWidth: 'container.xxl',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'earthBrown',
            paddingTop: {base: 8, lg: '47px'},
            paddingBottom: 8,
            paddingLeft: [4, 4, 0, 0],
            paddingRight: [4, 4, 0, 0]
        },
        subscribe: {
            maxWidth: {base: '21.5rem', lg: 'none'}
        },
        subscribeField: {
            fontSize: '14px',
            fontWeight: '600',
            background: 'white',
            color: 'gray.900',
            border: '1px solid',
            borderColor: 'earthBrown',
            borderRadius: 'none',
            _placeholder: {
                color: 'earthBrown'
            }
        },
        subscribeButtonContainer: {
            width: '28%'
        },
        subscribeHeading: {
            paddingBottom: "16px",
            fontWeight: "500",
            fontSize: "18px",
            color: "earthBrown"
        },
        subscribeMessage: {
            fontSize: 'sm',
            marginBottom: 4,
            minHeight: "72px",
            lineHeight: "130%"
        },
        localeSelector: {
            display: 'inline-block',
            marginTop: 8
        },
        localeDropdown: {
            background: 'gray.800',
            _hover: {
                background: 'whiteAlpha.500'
            }
        },
        localeDropdownOption: {
            color: 'black'
        },
        bottomHalf: {
            maxWidth: {base: '34.5rem', lg: '100%'}
        },
        horizontalRule: {
            marginTop: '110px',
            marginBottom: 4,
            borderTop: '1px solid',
            background: 'black'

        },
        copyright: {
            fontSize: 'sm',
            marginBottom: 6,
            color: 'earthBrown'
        },
        socialIcons: {
            marginTop: 4
        },
        textColor: {
            color: '#5F504D',
            width: '33%'
        },
        subscribeButtonContainerButton: {
            background: 'earthBrown',
            borderRadius: 'none',
            width: "100%"
        },
        burtsFooterLogo: {
            width: "100%",
            height: "100%",
            maxWidth: ["143px", "143px", "185px", "185px"]
        },
        footerWebsiteAccessibility: {

        },
        burtsfooterButton: {
            background: "none",
            backgroundColor: "none",
            color: "earthBrown"
        },
        linkedListStyle: {
            direction:"columns",
            pt: "20px",
            w: "51%",
            justifyContent: "space-between"
        },
        subscribeContainer: {
            w: "24%",
            pt: "32px"
        },
        footerlogoContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            w: '25%'
        }
    }
}
