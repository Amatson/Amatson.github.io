---
layout: archive
permalink: /
title: ""
---

<style type="text/css">
.bgimg {
    background-image: url('{{ site.baseurl }}/images/banner_hearts.jpg');
}
</style>

<div class="page-feature-image bgimg">
	<div class="wrap page-lead-content ">
		<h1>JulMat menee naimisiin</h1>
		<h2>22.2.2020<br>
		No olihan se jo aikakin!</h2>
	</div>
</div>

Matti Ojala ja Julia Gustafsson ovat aloittaneet häävalmistelunsa. Tervetuloa seuraamaan matkaamme alttarille!

<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->


<!-- https://mmistakes.github.io/skinny-bones-jekyll/ -->
