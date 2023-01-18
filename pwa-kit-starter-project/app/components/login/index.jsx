/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'
import {Alert, Box, Button, Stack, Text, Divider} from '@chakra-ui/react'
import {AlertIcon, BrandLogo, ChevronRightIcon} from '../icons'
import LoginFields from '../../components/forms/login-fields'
import {noop} from '../../utils/utils'

const LoginForm = ({submitForm, clickForgotPassword = noop, clickCreateAccount = noop, form}) => {
    return (
        <Fragment>
            <Stack justify="center" align="center" spacing={8} marginBottom={0}>
                {/* <BrandLogo width="60px" height="auto" /> */}
                <Text align="center" fontSize="xl" fontWeight="bold">
                    <FormattedMessage
                        defaultMessage="Sign in"
                        id="login_form.message.welcome_back"
                    />
                </Text>
            </Stack>
            <Divider orientation='horizontal' mt={"28px"}/>
            <form
                id="login-form"
                onSubmit={form.handleSubmit(submitForm)}
                data-testid="sf-auth-modal-form"
            >
                <Stack spacing={"24px"} paddingTop={"24px"}
                    maxWidth={{base: '270px', md: '270px', lg: '320px'}}
                    margin={"0 auto"}
                >
                    {form.errors?.global && (
                        <Alert status="error">
                            <AlertIcon color="red.500" boxSize={4} />
                            <Text fontSize="sm" ml={3}>
                                {form.errors.global.message}
                            </Text>
                        </Alert>
                    )}
                    <Stack>
                        <LoginFields form={form} />
                    </Stack>
                    <Stack spacing={"24px"}>
                        <Button
                            type="submit"
                            onClick={() => form.clearErrors('global')}
                            isLoading={form.formState.isSubmitting}
                            backgroundColor={"#FFD203"}
                            borderRadius={"none"}
                            _hover={{ backgroundColor: "#5F504D", color: "#ffffff" }}
                        >
                            <FormattedMessage
                                defaultMessage="Sign In"
                                id="login_form.button.sign_in"
                            />
                        </Button>

                        <Box textAlign={"center"}>
                            <Button variant="link" size="sm" onClick={clickForgotPassword}
                                fontSize={{base: "16px"}}
                                fontWeight={{base: "500"}}
                                // color={"#5F504D"}
                                textDecoration={"underline"}
                            >
                                <FormattedMessage
                                    defaultMessage="Forgot password?"
                                    id="login_form.link.forgot_password"
                                />
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </form>
            <Divider orientation='horizontal' mt={"28px"}/>
            <Stack direction="column" justify={"center"} alignItems={"center"} paddingTop={"24px"}>
                <Text fontSize="16px"
                    fontWeight={"500"}
                    // color={"#5F504D"}
                    paddingBottom={{base: "8px"}}
                >
                    <FormattedMessage
                        defaultMessage="Don't have an account?"
                        id="login_form.message.dont_have_account"
                    />
                </Text>
                <Button variant="link" size="sm" onClick={clickCreateAccount}
                    fontSize={{base: "16px"}}
                    fontWeight={{base: "400"}}
                    // color={{base:"#5F504D"}}
                >
                    <FormattedMessage
                        defaultMessage="Create account"
                        id="login_form.action.create_account"
                    />
                    <ChevronRightIcon />
                </Button>
            </Stack>
        </Fragment>
    )
}

LoginForm.propTypes = {
    submitForm: PropTypes.func,
    clickForgotPassword: PropTypes.func,
    clickCreateAccount: PropTypes.func,
    form: PropTypes.object
}

export default LoginForm
