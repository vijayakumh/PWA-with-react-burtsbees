/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
    useMultiStyleConfig,
    Box,
    Text,
    Link,
} from '@chakra-ui/react'

const PromoBanner = ({title, img, actions, ...props}) => {
    const styles = useMultiStyleConfig('promotionalBanner');

    return (
        <Box {...styles.container}
            >
           <Box {...styles.content}
           >
            <Link>
                <Text 
                    as="span"
                    fontSize={{base: '12px', lg: '16px'}}
                >
                    Get Free Shipping on $35+ Orders. Order by 12/19 for 2 day shipping & get your gifts in time!
                </Text>
            </Link>
           </Box>
        </Box>
    )
}

PromoBanner.displayName = 'Promotional Banner'

PromoBanner.propTypes = {
    
    /**
     * Promotional Banner component main title
     */
    title: PropTypes.string,
    /**
     * Call to action component(s)
     */
    actions: PropTypes.element
}

export default PromoBanner
