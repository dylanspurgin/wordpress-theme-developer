<footer class="content-padding boxed stacked-on-mobile">
	<nav>
		<router-link class="menu-item" :to="{name: 'Home'}">
			Home</router-link>
		<router-link class="menu-item" :to="{name: 'Policies'}">
			Policies</router-link>
		<router-link class="menu-item" :to="{name: 'Trivia'}">
			Chile Trivia</router-link>
		<a class="menu-item" href="https://store.chiloschile.com">
			Store</a>
		<router-link class="menu-item" :to="{name: 'Contact'}">
			Contact</router-link>
	</nav>
	<section class="copyright">
		All content &copy; ChilosChile {{year}}
	</section>
</footer>


<?php wp_footer(); ?>

<!-- GOOGLE ANALYTICS -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-10662187-4', 'auto');
  ga('send', 'pageview');

</script>

</body>
</html>
