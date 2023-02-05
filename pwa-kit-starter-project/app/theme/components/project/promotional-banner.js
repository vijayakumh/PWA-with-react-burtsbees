/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    parts: ['container', 'content'],
    baseStyle: {
        container: {
            width: 'full',
            backgroundColor: 'promobannerBackground',
            height: ['49px', '49px', '32px', '32px'],
            display: 'flex',
            alignItems: 'center'
        },
        content: {
            maxWidth: 'container.xxl',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white',
            textAlign: 'center',
            paddingLeft: ['32px', null, null, null],
            paddingRight: ['32px', null, null, null],
            width: '100%',
            position: 'relative',
            lineHeight: '18px'
        },
        text: {
            fontSize: ['12px', '12px', '12px', '14px'],
            color: 'promoBannerTextColor'
        },
        closeButton: {
            float: 'right',
            backgroundColor: 'unset',
            padding: 'unset',
            height: 'unset',
            position: 'absolute',
            right: [0, 0, 0, '32px'],
            top: ['5px', '5px', '5px', '1px'],
            minWidth: 'unset'
        }
    }
}
