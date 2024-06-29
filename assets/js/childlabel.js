document.addEventListener("DOMContentLoaded", function() {
      // 找到所有的 .opener 元素
      var openers = document.querySelectorAll(".opener");
      
      openers.forEach(function(opener) {
        // 找到下一个兄弟元素 ul
        var ul = opener.nextElementSibling;
        
        if (ul && ul.tagName.toLowerCase() === 'ul') {
          // 计算子标签的数量
          var itemCount = ul.children.length;
          // 在 .opener 元素中追加子标签个数
          opener.textContent += ' (' + itemCount + ')';
        }
      });
    });