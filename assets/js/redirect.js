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
		console.log(slug);
		if (slug.indexOf("kimble/") == 0) {
			slug = slug.replace("/", "_");
		}

    xhr({
	    src: "redirect_urls.json",
	    onsuccess: function () {
		    var slugs = JSON.parse(this.responseText);

		    var hash = slugs[slug];

            if (hash) {
                console.log("hash found");
			    // Redirect
			    //var url = hash.indexOf("http") == 0? hash : "http://dabblet.com/gist/" + hash;
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
