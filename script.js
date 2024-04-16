
<script>
    
    /** Gryffindor SCRIPT*/
    document.getElementById("Sword").addEventListener("mouseover", highlightSword);
    document.getElementById("Sword").addEventListener("mouseout", delightSword);

    function highlightSword() {
        document.getElementById("Sword").style = "height: 140px; width: 150px; margin-left: 20px; border: solid red 4px; background-color: red"
    }
    function delightSword() {
        document.getElementById("Sword").style = "height: 140px; width: 150px; margin-left: 20px; border: none;"
    }


    /** Hufflepuff SCRIPT*/        
    document.getElementById("Cup").addEventListener("mouseover", highlightCup);
    document.getElementById("Cup").addEventListener("mouseout", delightCup);

    function highlightCup() {
        document.getElementById("Cup").style = "height: 140px; width: 150px; margin-left: 20px; border: solid yellow 4px; background-color: yellow"
    }
    function delightCup() {
        document.getElementById("Cup").style = "height: 140px; width: 150px; margin-left: 20px; border: none;"
    }


    /** Ravenclaw SCRIPT*/        
    document.getElementById("Diaem").addEventListener("mouseover", highlightDiaem);
    document.getElementById("Diaem").addEventListener("mouseout", delightDiaem);

    function highlightDiaem() {
        document.getElementById("Diaem").style = "height: 140px; width: 150px; margin-left: 20px; border: solid blue 4px; background-color: blue"
    }
    function delightDiaem() {
        document.getElementById("Diaem").style = "height: 140px; width: 150px; margin-left: 20px; border: none;"
    }


    /** Slytherin SCRIPT*/        
    document.getElementById("Locket").addEventListener("mouseover", highlightLocket);
    document.getElementById("Locket").addEventListener("mouseout", delightLocket);

    function highlightLocket() {
        document.getElementById("Locket").style = "height: 140px; width: 150px; margin-left: 20px; border: solid green 4px; background-color: green"
    }
    function delightLocket() {
        document.getElementById("Locket").style = "height: 140px; width: 150px; margin-left: 20px; border: none;"
    }

</script>