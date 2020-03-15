---
layout: post
title:  "Domain serving"
date:   2020-03-20 15:00:00 +0200
categories: web
excerpt_separator: <!--more-->
#published: false
---

Serving a webpage is fun and games, until... Actually, nothing. It is fun and easy with right tools. Let's take a look.
<!--more-->

I started this project a year ago by creating an anniversary surprise for my fiancée. Julmat.fi saw its daylight 22. of February 2020 after couple of weeks of work. That's like two to three evenings of hard work.

## Content management and Github pages

What would a page be without content.

## Domain name and Ficora

*"What do you think? All I need is a title."*

Now we need the name, and we get it by acquiring a domain name from the service provider. Several instances sell these services, but you can also become one by yourself if you want to have a fi-domain. Ficora (ex domain services from the Finnish transport and communications agency) offers a possibility to become a domain service provider aka registrar. This doesn't require much, in the past you could just acquire a domain name with couple of clicks, now you just have to assure that you know what you are doing thus taking the responsibility of the domain name distributing.

Start by reading the instructions for becoming a registrar from [Traficoms site](https://www.traficom.fi/en/communications/fi-domains/domain-name-registrars).
If this sounds too hard, or let's say you don't dare to accept the terms and conditions without fully understanding what you're doing, you can find other service providers that work as the middle man and take some fee when doing the stuff you could do by yourself. Some of these are for example (Domainhotelli)[https://www.domainhotelli.fi/] or (Louhi)[https://www.louhi.fi/] that distribute fi-domains.

Domain registering costs 9€ annually. After becoming a registrar, you need to pay in advance minumum one year fee of a domain name. Login to (Traficom login.domain.fi)[https://login.domain.fi/]. Start by putting some balance on the prepaid account and afer that, you are good to go...

But wait. First you need a DNS provider so that people can't redirect from your domain to their sites. This should be done before registering the domain name.

## DNS thingie and Netlify

When using distributed service providers for domain serving, in this case the fi-domain registering, you need also a DNS-service provider. Registering a domain name is one thing, in Ficora they don't have the possibility to redirect from the domain name to your site. This is what DNS-service providers do. There are several free service providers like (dy.fi)[https://www.dy.fi/], but for the future possibilities, we use Netlify here. Register to (Netlify)[https://www.netlify.com/] and


## Domain name - part II

Now that you have DNS provider handling the redirect part, you need to give this information to domain name manager. Back to Ficora then.
Start by filling in the DNS information. Create new DNS-group that will make it easier to fill the rest of the information in the future. Give some describing name to the DNS-group and fill in the DNS-server addresses you got from the Netlify.
Now you can register the fancy domain name with fi-ending you have always wanted. Add the DNS-group for the domain name and perform a technical check. Netlify is quite fast with its updates so it should work right of the bat. Don't panic if it doesn't, sometimes DNS updates take up to a day to finish.

Annnnnd DONE! You have a domain! Congratulations!


## Autopublishing and Zapier

Using Zapier for autopublishing daily


#### *Displayed!*
