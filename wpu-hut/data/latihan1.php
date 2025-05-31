<?php
$data = file_get_contents('pizza.json');
$menu = json_decode($data, true);

$menu = $menu["menu"];
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>WPU Hut</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../img/logo.png" width="100" alt="Logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" href="#">All Menu</a>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row mt-3">
  <?php foreach ($menu as $m) : ?>
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="../img/menu/<?= $m["gambar"]; ?>" class="card-img-top" alt="<?= $m["nama"]; ?>">
        <div class="card-body">
          <h5 class="card-title"><?= $m["nama"]; ?></h5>
          <p class="card-text"><?= $m["deskripsi"]; ?></p>
          <h5 class="card-title">Rp. <?= number_format($m["harga"], 0, ',', '.'); ?>,-</h5>
          <a href="#" class="btn btn-primary">Pesan Sekarang</a>
        </div>
      </div>
    </div>
  <?php endforeach; ?>
</div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
  </body>
</html>
