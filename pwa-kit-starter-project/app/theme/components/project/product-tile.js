/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import figmaColors from '../../foundations/figma'

export default {
    baseStyle: () => ({
        container: {
            background: figmaColors.plpTileBackground,
            borderRadius: figmaColors.plpTileBorderRadius,
            boxShadow: figmaColors.plpTileBoxShadow,
            _hover: {
                transform: `scale(${figmaColors.plpTileHoverScale})`
            }
        },
        favIcon: {
            position: 'absolute',
            variant: 'unstyled',
            top: 2,
            right: 2
        },
        imageWrapper: {
            position: 'relative',
            marginBottom: 2
        },
        image: {
            ratio: 1,
            paddingBottom: 2,
            borderTopLeftRadius: figmaColors.plpTileBorderRadius
        },
        price: {
            fontSize: figmaColors.plpTileprodPriceFontSize,
            fontWeight: figmaColors.plpTileprodPriceFontWeight,
            color: 'plpTileprodPriceColor'
        },
        title: {
            fontSize: figmaColors.plpTileprodNameFontSize,
            fontWeight: figmaColors.plpTileprodNameFontWeight,
            color: 'plpTileprodNameColor'
        },
        rating: {},
        variations: {}
    }),
    parts: ['container', 'imageWrapper', 'image', 'price', 'title', 'rating', 'variations']
}
