---
layout: post
title:  "Domain administering"
date:   2019-01-22 22:00:00 +0200
categories: web domain
#excerpt_separator: <!--more-->
permalink: domaining
---

Now that my personal web page project is making progress, it's time to get some consulting about the domain issue.

## How to get your own domain

I got a chance to discuss about this topic with a colleague who currently hosts his own domain. His pages are also in GitHub and made with Jekyll, so the steps I'm being guided through are the next logical steps from where I am now. Let's get started!


## Options and possibilities

There are number of ways to have a domain and a webpage. The categories are *(somewhat) free* and *costy*. Those that involve montly payments are usually simple and easy to maintain. Countless of service providers offer a domain with a subscription fee, and user can also buy some add-on services such as web hotel and mail services to host their site. Here it is also important to notice the difference between static and dynamic content when choosing the service provider and add-ons.

If you're considering having a blog-type resumee-like porfolio-style webpage with only reading or picture viewing content, you are having a static site. The content isn't changing before you update it and the users come only to see the end results of your work.
However, if you possibly have something on the backend, like data storaging based on user inputs (like user login, stuff to interact with, something more hard core than javascript), we are talking about a dynamic site. Static is cheaper to maintain, obviously, and it can be almost free, too.

Here we stick on the free options to host a static website.

## Free, almost

Domain is actually a registered shortlink to somewhere else. In this case, my domain is matsojala.fi which has a Finnish domain ending .fi on it. There are multiple free services that offer a solution to use something short but not as personal as own domain. I first started with [dy.fi](https://www.dy.fi/) services. It was easy to start with and it is completely free. Dy.fi offers both shortlink "domains" with dy.fi ending, like matsojala.dy.fi to redirect here, and email redirect services so I can have spam.to.me@matsojala.dy.fi emails to my gmail inbox. This is extremely convenient if you need to have that one mail from a service but are afraid of spam to your primary email address. Just make another email redirect address service@yourthingie.dy.fi and you can trash it after you're done.

Dy.fi works also with own server solution so you don't have to remember long IP addresses.
<!-- TODO: add post about own server -->

After playing with dy.fi it was time to move to own domain solution. As said, there are multiple services that offer domain names. I wanted to have a Finnish domain .fi so I needed to contact Finnish Transport and Communications Agency Traficom. They list several domain name providers, but they also give a possibility to become one. The thing is, currently a normal person cannot acquire a Finnish domain but is forced to use a service provider. This is probably due to the amount of contacts from people who got their domain name in the past and didn't know how to use it. Now, Traficom require an in-depth understanding about the domain hosting from the persons allowed to host domains. Fortunately, that is not hard and anyone can still do this after accepting the terms and conditions and waiting couple of days for the confirmation from the Traficom.

So, just go and register yourself in [Traficoms registeration](https://registry.domain.fi/s/fi/Registration/Register) ([in English](https://registry.domain.fi/s/en/Registration/Register)) and in a day or two you get a confirmation and a permission to start dealing .fi domain names. Here comes the *almost* part in free. Finnish .fi domain costs 9€ annually, so you have to send "balance" money to the service and pay atleast one year to be able to host a domain. No other costs comes from owning a domain name.

When you have paid for the domain name you need a DNS service provider that is able to redirect users from your .fi domain to the exact location in the internet your pages are on. Remember, domain names are just shortlinks to somewhere else. How internet browsers find that "else" is because of the DNS servers. When you hit enter on your browser and set course to a domain, your browser first takes the last part of the domain name (.fi in this example) and asks the domain server about the address. Server seeks for the DNS records of the address and sends a query there to find out where to go next. DNS server has a database of addresses that the DNS service provider holds. Now browser gets the right location of the address and asks for the content to show to user.

Dy.fi is a DNS service provider, too, and can be used here ([Dy.fi page hosting](https://www.dy.fi/page/hosting)), but I found more efficient way to do this.

## Introducing Netlify




<!--
domain: matson.fi
 IP + IPv6

 digitalocean.fi
 virtuaaliserveri

 github a record
 ip ohjaus
 nimipalvelin githubin suuntaan

 education.github.com
 dnsimple
 / digitalocean



 mailit:
 mail domain hosting
 protonmail.com
 g suite


 100€/v


dy.fi
dns palvelut


ilmaisissa luotettavuusongelma
mutta hyvä kokeilla sellaisilla



Malliksi sivuille:

juusomikkonen.com

heko.fi
 -->


#### *Displayed!*
