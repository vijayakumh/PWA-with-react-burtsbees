/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import figmaColors from '../../foundations/figma'

export default {
    parts: ['heading', 'border', 'breadCrumb', 'subHeading', 'contentStyles'],
    baseStyle: {
        breadCrumb: {
            color: 'breadCrumbColor',
            fontSize: figmaColors.breadCrumbFontSize,
            fontWeight: figmaColors.breadCrumbFontWeight
        },
        border: {
            // borderWidth: figmaColors.plpFilterSectionBorder.width,
            // borderStyle: figmaColors.plpFilterSectionBorder.style,
            borderColor: figmaColors.plpFilterSectionBorder.color
        },
        heading: {
            color: 'plpFilterHeadingColor',
            fontSize: figmaColors.plpFilterHeadingFontSize,
            fontWeight: figmaColors.plpFilterHeadingFontWeight
        },
        subHeading: {
            color: 'plpFilterSubHeadingColor',
            fontSize: figmaColors.plpFilterSubHeadingFontSize,
            fontWeight: figmaColors.plpFilterSubHeadingFontWeight
        },
        contentStyles: {
            color: 'plpFilterContentColor',
            fontSize: figmaColors.plpFilterContentFontSize,
            fontWeight: figmaColors.plpFilterContentFontWeight
        }
    }
}
