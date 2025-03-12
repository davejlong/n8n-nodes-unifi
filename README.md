# n8n-nodes-unifi

This is an n8n community node to work with the Syncro RMM API in your n8n workflows.

- [Warning](#warning)
- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Resources](#resources)
- [Funding](#funding)

## Warning

The UniFi Site Manager API is part of the Early Access program and is still in active development.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Network API

#### Sites

* Get All - List local sites managed by the Network controller

#### Devices

* Get All - List adopted devices for a site

### Site Manager API

#### Devices

* Get All - Retrieves UniFi devices managed by a host

#### Hosts

* Get All - Retrieve hosts associated with the UI account
* Get - Retrieve detailed information about a specific host

#### Sites

* Get All - Retrieve sites associated with the UI account.

## Credentials

### Network API

API Keys for the Network API can be generated from the UniFi console under the Control Pane section on the Integrations Tab.

### Site Manager API

The UniFi Site Manager API is only available to Early Access Program members. See information about how to sign up for EA and get an API key from the [API Documentation](https://developer.ui.com/site-manager-api/gettingstarted/)

## Compatibility

Tested against n8n 1.79.3+

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [UniFi API documentation](https://developer.ui.com/site-manager-api/)

## Funding

If this community node helps you, please consider funding it's continued development.

<a href="https://www.buymeacoffee.com/davejlong" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
