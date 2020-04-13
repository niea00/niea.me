
<script>
  let title = 'niea.me';
  let i = 7;
  setInterval(() => {
    document.title = title.substring(0, i + 1);
    if (i == 0) {
      direction = 1;
    } else if (i == title.length) {
      direction = -1;
    }
    i += direction;
  }, 300);

  console.log("%c ", "background-image: url('/static/img/console.png'); background-repeat: no-repeat; background-size: 128px 512px; font-size: 128px;background-color:#000;padding: 0;margin:0;")
;
</script>
</body>

</html>
