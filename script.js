const img=document.getElementById("myimg");
                img.addEventListener("click",
                function()
                {
                    img.classList.toggle("rotated");
                });
            const img2=document.getElementById("myimg2");
                img2.addEventListener("click",
                    function()
                    {
                        img2.classList.toggle("rotated");
                    });
            const img3=document.getElementById("myimg3");
                img3.addEventListener("click",
                    function()
                    {
                        img3.classList.toggle("rotated");
                    });
            const img4=document.getElementById("myimg4");
                img4.addEventListener("click",
                    function()
                    {
                        img4.classList.toggle("rotated");
                    });
            const img5=document.getElementById("myimg5");
                img5.addEventListener("click",
                    function()
                    {
                        img5.classList.toggle("rotated");
                    });
            const flag_ig=document.getElementById("flag");
            flag_ig.addEventListener("click",
                function()
                {
                    flag_ig.classList.toggle("rotated");
                });

function showTab(tabId, clickedButton) {
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));

      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('text-blue-900', 'border-blue-900');
        btn.classList.add('text-blue-900', 'border-transparent');
      });
      document.getElementById(tabId).classList.remove('hidden');
      clickedButton.classList.add('text-blue-900', 'border-blue-900');
      clickedButton.classList.remove('text-blue-900', 'border-transparent');
    }