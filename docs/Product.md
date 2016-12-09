# SwappyRestApi.Product

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** |  | [optional] 
**title** | **String** |  | 
**quantity** | **Integer** |  | [optional] 
**images** | [**[ProductImage]**](ProductImage.md) |  | [optional] 
**category** | [**Category**](Category.md) |  | 
**address** | [**Address**](Address.md) |  | [optional] 
**description** | **String** |  | 
**auction** | **Boolean** |  | 
**dateStart** | **Date** | ISO-8601 date or Duration, if it is a duration, it will be relative to process time | [optional] 
**live** | [**Live**](Live.md) |  | [optional] 
**price** | **Number** |  | 
**reservePrice** | **Number** |  | [optional] 
**buynowPrice** | **Number** |  | [optional] 
**lotNumber** | **String** |  | [optional] 
**delivery** | [**[Delivery]**](Delivery.md) |  | 
**payment** | [**[Payment]**](Payment.md) |  | 
**autoRenew** | **Boolean** |  | [optional] 
**taxes** | [**ProductTaxes**](ProductTaxes.md) |  | [optional] 
**estimate** | [**ProductEstimate**](ProductEstimate.md) |  | [optional] 
**offer** | [**ProductOffer**](ProductOffer.md) |  | [optional] 
**duration** | **Integer** |  | [optional] 


