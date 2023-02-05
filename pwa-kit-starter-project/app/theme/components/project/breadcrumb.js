/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import figmaColors from '../../foundations/figma'

export default {
    baseStyle: {
        container: {
            minHeight: 4,
            fontSize: 'sm'
        },
        icon: {
            display: 'flex',
            boxSize: 4,
            color: 'breadCrumbColor'
        },
        link: {
            paddingTop: 3,
            paddingBottom: 3,
            color: 'breadCrumbColor',
            fontSize: figmaColors.breadCrumbFontSize,
            fontWeight: figmaColors.breadCrumbFontWeight
        }
    },
    parts: ['container', 'icon', 'link']
}
