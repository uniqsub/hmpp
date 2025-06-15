function($) {
      // ヘッダーの高さを代入する処理
      function setHeaderHeights() {
        var commonHeaderHeight = $("header").outerHeight();
        // ハンバーガーメニューの上部にheaderの高さ分の余白をつける
        $("#hb-menu").css("padding-top", commonHeaderHeight + "px");
      }

      // リサイズ時にもsetHeaderHeightsを実行
      $(window).on('resize', function() {
        setHeaderHeights();
      });

      // setHeaderHeightsを実行
      setHeaderHeights();

      // ハンバーガーメニューのクリック処理
      $('#openbtn').on('click', function() {
        $(this).toggleClass('active'); // ボタン自身に.activeクラスをトグル
        $('#hb-menu').toggleClass('active', $(this).hasClass('active')); // ハンバーガーメニューに.activeクラスをトグル
        if ($(this).hasClass('active')) {
          // ハンバーガーメニューがアクティブな場合の処理
          $('#openbtn .hamburger-lines').addClass('active');
          $('#openbtn .hamburger-lines .line:nth-child(1)').css('width', '60%'); // 上の線の幅を60%に設定
          $('#openbtn .hamburger-lines .line:nth-child(2)').css('width', '60%'); // 下の線の幅を60%に設定
          setTimeout(function() {
            // 交差させるために、上の線を下に、下の線を上に移動し、45度回転させる
            $('#openbtn .hamburger-lines .line:nth-child(1)').css('bottom', '0').css('transform', 'rotate(45deg)');
            $('#openbtn .hamburger-lines .line:nth-child(2)').css('top', '0').css('transform', 'rotate(-45deg)');
          }, 300); // 300ミリ秒後に実行
        } else {
          // ハンバーガーメニューが非アクティブな場合の処理
          $('#openbtn .hamburger-lines .line:nth-child(1)').css('transform', 'rotate(0deg)').css('bottom', 'auto'); // 上の線の回転と位置を元に戻す
          $('#openbtn .hamburger-lines .line:nth-child(2)').css('transform', 'rotate(0deg)').css('top', 'auto'); // 下の線の回転と位置を元に戻す
          setTimeout(function() {
            $('#openbtn .hamburger-lines .line:nth-child(1)').css('width', '100%'); // 上の線の幅を元に戻す
            $('#openbtn .hamburger-lines .line:nth-child(2)').css('width', '100%'); // 下の線の幅を元に戻す
            $('#openbtn .hamburger-lines').removeClass('active'); // .hamburger-linesから.activeクラスを除去
          }, 300); // 300ミリ秒後に実行
        }
      });
    });