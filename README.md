# Crystallize React Native Boilerplate (Beta)

Storefront for the
[headless ecommerce][8] & GraphQL based [product Information Management][9]
service [Crystallize][10]. [React Native eCommerce][11].

![title](assets/readme-preview.png)

This React Native Boilerplate gives you a head start when building a [React Native
ecommerce app][11]. You can have rich ecommerce content with the super structured [PIM][13] engine in
Crystallize powering your product catalogue.

Note: The boilerplate is currently work in progress, but you can already load products and marketing content.

Check it out, the boilerplate is Open Source and MIT licensed.

## Prerequisite

- You need to have the latest version of Xcode installed
- You need to have cocoapods installed
- You need to download the iPhone 11 simulator via Xcode

## Getting Started with the CLI

You can use [Crystallize CLI][17] to bootstrap a project with this
`React Native` boilerplate.

Simply run the following command (>= Node 8 required):

```sh
npx @crystallize/cli my-project
```

This will walk you through the steps of specifying your tenant, choosing the
template (React Native).

### Running on iOS

To run the iOS app you need to have Xcode and Cocoapods installed. Once the CLI
finishes the installation, navigate into your project using the terminal and
run the following commands.

```sh

cd ios
pod install
cd ..

```

To run the app simply run the following command

```sh
npx react-native run-ios
```

### Setting up Environment variables

Create a .env file in the root of the project if it doesn't exist. Add the following lines.
This will tell the app to connect to our Service API and tenant. If you have your own setup,
feel free to use that instead.

```
CRYSTALLIZE_TENANT_IDENTIFIER=furniture
PUBLIC_SERVICE_API_URL=https://service-api-demo.superfast.shop/api/graphql
```

[1]: https://reactnative.dev/
[2]: https://img.shields.io/badge/nuxt-latest-44cc11.svg?style=flat-square
[3]: https://reactnative.dev/
[4]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[5]: https://github.com/prettier/prettier
[6]: https://img.shields.io/badge/code_linter-eslint-463fd4.svg?style=flat-square
[7]: https://github.com/prettier/prettier
[8]: https://crystallize.com/product
[9]: https://crystallize.com/product/product-information-management
[10]: https://crystallize.com
[11]: https://crystallize.com/developers
[12]: https://crystallize.com/blog/frontend-performance-measuring-kpis
[13]: https://crystallize.com/product/product-information-management
[14]: https://crystallize.com/blog/ecommerce-seo-checklist
[15]: https://crystallize.com/blog/content-rich-storytelling-makes-juicy-ecommerce
[16]: https://snowball.digital/blog/content-strategy-for-exponential-growth-marketing
[17]: https://github.com/crystallizeapi/crystallize-cli
[20]: https://vercel.com
[21]: https://img.shields.io/static/v1?label=Slack&logo=slack&message=Crystallize%20Community&color=68d1b7
[22]: https://crystallizecommunity.slack.com
