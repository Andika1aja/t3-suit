function cekkomputer()
    {
        var komputer = ['gunting', 'kertas', 'batu']
        var index =  Math.floor(Math.random() * komputer.length)
        var hasil = komputer[index]
        document.getElementById('enemy').setAttribute("src",hasil+".png");
        return hasil
    } 

    function logika(com, you){
        if(com == you){
            return 'Seri'
    }else if(com == 'gunting' && you == 'batu'){
        return ' Menang'
    }else if(com == 'gunting' && you == 'kertas'){
        return 'Kalah'
    }else if(com == 'kertas' && you == 'batu'){
        return 'Kalah'
    }else if(com == 'kertas' && you == 'gunting'){
        return 'Menang'
    }else if(com == 'batu' && you == 'kertas'){
        return 'Menang'
    }else if(com == 'batu' && you == 'gunting'){
        return 'Kalah'
    }
}

    function gunting(){
        var com = cekkomputer()
        var you = 'gunting'
        document.getElementById('status').textContent = logika(com, you)
    }

    function batu(){
        var com = cekkomputer()
        var you = 'batu'
        document.getElementById('status').textContent = logika(com, you)
    }

    function kertas(){
        var com = cekkomputer()
        var you = 'kertas'
        document.getElementById('status').textContent = logika(com, you)
    }
