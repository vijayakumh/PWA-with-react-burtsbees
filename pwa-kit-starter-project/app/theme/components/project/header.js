/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {
            height: 'full',
            minWidth: 'xs',
            width: 'full',
            boxShadow: 'base'
        },
        content: {
            maxWidth: 'container.xxl',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '100%',
            paddingLeft: [4, 4, 0, 0],
            paddingRight: [4, 4, 0, 0],
            // paddingTop: [1, 1, 2, 4],
            // paddingBottom: [3, 3, 2, 4]
        },
        searchContainer: {
            order: [2, 2, 2, 'inherit'],
            width: ['full', 'full', 'full'],
            marginRight: [0, 0, 0, 4],
            marginBottom: [1, 1, 2, 0]
        },
        bodyContainer: {
            flex: '1'
        },
        logo: {
            // width: '184px',
            // height: '80px'
        },
        icons: {
            // marginBottom: [1, 1, 2, 0],
            // marginLeft: "5px"
        },
        accountIcon: {
            height: 11,
            cursor: 'pointer',
            alignSelf: ['self-start', 'self-start', 'self-start', 'auto'],
            _focus: {
                boxShadow: 'outline'
            },
            _focusVisible: {
                outline: 0
            },
            marginLeft: "38px"
        },
        arrowDown: {
            height: 11,
            marginRight: 0,
            alignSelf: ['self-start', 'self-start', 'self-start', 'auto'],
            cursor: 'pointer',
            _focus: {
                boxShadow: 'outline'
            },
            _focusVisible: {
                outline: 0
            },
            display: ['none', 'none', 'none', 'block']
        },
        signout: {
            width: '100%',
            borderRadius: '4px',
            height: 11,
            padding: 4,
            py: 3,
            marginTop: 1,
            _hover: {
                background: 'gray.50'
            }
        },
        signoutText: {
            fontSize: 'sm',
            fontWeight: 'normal'
        },
        signoutIcon: {
            marginRight: 2
        }
    },
    parts: ['container', 'content', 'searchContainer', 'bodyContainer', 'logo', 'icons', 'signout']
}
