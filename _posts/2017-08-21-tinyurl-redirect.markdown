---
layout: post
title:  "TinyUrl Redirect"
date:   2017-08-21 15:00:00 +0200
categories: web javascript
excerpt_separator: <!--more-->
#published: false
---

Ever used shortlinks or tinyurl-like services? Those where you drop the long url to the webpage and get short and perhaps even  memorizable link. I have, and sometimes I wish to write down those links so I'd know what was important to memorize. So, here's how to create an add-on for these github-pages to create shortlinks!
<!--more-->

## Introduction

And it wasn't even hard, really. Just needed some googling about the topic and a bit of modification to an existing solution. All thanks goes to Lea Verou and [the introduction she had made](http://lea.verou.me/2016/11/url-rewriting-with-github-pages)

So how this works is as follows: <br>
User gives an URL to your site. BUT. It is formed as http://mysite.github.io/someshortlink <br>
Normally, this kind of shortlink would lead to a 404-page telling the user that this page does not exist. What we do is just replace the 404-page with our own page with a javascript that checks the ending of the URL. The script compares the ending with a list of short redirect URLs in the database. If there is a match, the script redirects the user to the found address. If not, user is shown a "not found" page.

Got the idea? Let's go!

## The Procedure

We proceed mostly as Lea instructed. Some functions did not work at the first try so I try to tackle these problems as well.

First we create the 404-not-found-page. It is given a permalink */404.html* and named in same way, and it is located to the root of the github page folder structure.

{% highlight html %}
---
permalink: /404.html
layout: default
---

<section class="redirecting">
    <h1>Redirecting...</h1>
    <p>Please wait. This won't take long.</p>
</section>
<script src="{{ '/assets/js/redirect.js' | relative_url }}"></script>
{% endhighlight %}
So this is what the 404.html looks like. That's all. OK, yes, I did thank the original author in the comments.

Moving on. Now we have the page, next we need the script.

In the assets-folder we create the mentioned *redirect.js* -file. And in the file we write this javascript magic:
{% highlight javascript %}
function $(expr, con) {
	return typeof expr === "string"? (con || document).querySelector(expr) : expr;
}
function $$(expr, con) {
	return Array.prototype.slice.call((con || document).querySelectorAll(expr));
}
function xhr(o) {
	var xhr = new XMLHttpRequest(o.src);
	xhr.open("GET", o.src);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status < 400) {
				try {
					o.onsuccess.call(xhr);
				}
				catch (e) {
					o.onerror.call(xhr);
					console.error(e);
				}
			}
			else {
				o.onerror.call(xhr);
			}
		}
	};
	xhr.send();
}
(function(){
    var slug = location.pathname.slice(1);
    xhr({
	    src: "redirect_urls.json",
	    onsuccess: function () {
		    var slugs = JSON.parse(this.responseText);
		    var hash = slugs[slug];
            if (hash) {
                console.log("hash found");
			    // Redirect
                var url = hash;
                $("section.redirecting > p").innerHTML = "Redirecting to <a href='" + url + "'>" + url + "</a>...";
			    location.href = url;
		    }
            else {
                $("section.redirecting > p").innerHTML = "<strong>Requested URL could not be found!</strong><br> Redirecting missing or URL mistyped.";

		    }
	    },
	    onerror: function () {
	       //document.body.className = "error json";
	    }
    });
})();
{% endhighlight %}
What this script does, is activating when 404-page is loaded. Pathname is read to the slug-variable and an [xhr-function](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) is called. I should probably understand this better, but it wasn't necessary.
First I removed the prefix of the redirect URL. The JSON has a complete URL in it so we don't have to do any parsing. If the keyword aka the hash or the redirect shortlink ending does matches to a JSON key, the page paragraph is modified to let the user know about the redirect. Then the location is set to the URL and redirection takes place. If the shorlink is not found from the JSON file, user is notified by, once again, modifying the paragraph on the page.

Finally, all we need is the JSON file with the key-value pairs. The key represents the shorlink, *"someshortlink"* in our example, and the value is then of course the full URL we wish to redirect the user to.
For instance, it could look something like this:

{% highlight json %}

{
  "redirect_source": "http://lea.verou.me/2016/11/url-rewriting-with-github-pages/",
  "someshortlink": "https://amatson.github.io/web/javascript/2017/08/21/tinyurl-redirect.html"
}
{% endhighlight %}

And there we are!

### Improvement ideas

This is too simple. The shortlink needs to be created to the JSON file by modifying it. I do it now by poking a knife to the github file. Way too simple. This could really need a password protected form that takes the shorlink and the long URL and saves the key-value-pair to the JSON file. Or maybe not password, but something to keep it easy to maintain and modify.

Lea also had some good points in her solution, some of which I skipped as unnecessary for me. But this was fun and quite simple to implement into my pages.

That's all folks!
#### *Displayed!*
