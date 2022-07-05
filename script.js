function calcularIMC() {
    
    let peso = window.document.querySelector('#peso').value
    let altura = window.document.querySelector('#altura').value
    let idade = window.document.querySelector('#idade').value
    let sexo = window.document.querySelectorAll('.sexo')
    let genero = ''
    
    let imc = peso / (altura / 100 ) ** 2
    let pesoIdealMas = (altura - 100) * 0.90
    let pesoIdealFem = (altura - 100) * 0.85 
    
    let respostaIMC = window.document.querySelector('#respIMC')
    let pesoIdeal = window.document.querySelector('#pesoIdeal')
    let imagem = window.document.querySelector('#img')
    let classificacaoIMC = window.document.querySelector('#classificacao') 

    //Teste se os campos estão vazios
    if (peso == "" || altura == '' || idade == '' || !(sexo[0].checked || sexo[1].checked)) {
        window.alert('Por favor preencha todos os campos!')
        return
    }
    else {
        respostaIMC.innerHTML = 'Seu IMC é <strong>' + imc.toFixed(2) + ' kg/m² </strong>'

        //Sexo Masculino
        if (sexo[0].checked) {
            pesoIdeal.innerHTML = `E o seu peso ideal é <strong> ${pesoIdealMas.toFixed(2)} kg </strong>`

            //Teste de Idade Menino
            if (idade >=5 && idade <= 10){
                imagem.innerHTML = '<img src="imagens/menino.jpg" alt="imagem">'
                genero = 'menino'

                if (imc < 14.5){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> BAIXO </strong> para um ${genero} de ${idade} anos.`    
                }
                else if  (imc >= 14.5 && imc <= 17){
                    classificacaoIMC.innerHTML = `Seu IMC é considerado <strong> NORMAL </strong> para um ${genero} de ${idade} anos.`
                }
                else if  (imc > 17 ){
                    classificacaoIMC.innerHTML = `Atenção! Seu IMC é considerado <strong> ALTO </strong> para um ${genero} de ${idade} anos.`
                }
            }
            
            //Teste de Idade Garoto
            else if (idade >= 11 && idade <=17) {
                imagem.innerHTML = '<img src="imagens/garoto.jpg" alt="imagem">'
                genero = 'garoto'

                if (imc <= 18){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> BAIXO </strong> para um ${genero} de ${idade} anos.`    
                }
                else if  (imc > 18 && imc <= 22){
                    classificacaoIMC.innerHTML = `Seu IMC é considerado <strong> NORMAL </strong> para um ${genero} de ${idade} anos.`
                }
                else if  (imc > 22 ){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> ALTO </strong> para um ${genero} de ${idade} anos.`
                }
            }

            //Teste de Idade Homem
            else if (idade >= 18 && idade <=64) {
                imagem.innerHTML = '<img src="imagens/homem.jpg" alt="imagem">'
                genero = 'homem'

                if (imc <= 18.5){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> BAIXO </strong> para um ${genero} de ${idade} anos.`    
                }
                else if  (imc > 18.5 && imc <= 24.99){
                    classificacaoIMC.innerHTML = `Seu IMC é considerado <strong> NORMAL </strong> para um ${genero} de ${idade} anos.`
                }
                else if  (imc >= 25 ){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> ALTO </strong> para um ${genero} de ${idade} anos.`
                }                
            }

            //Teste de Idade Senhor
            else if (idade >= 65 ){
                imagem.innerHTML = '<img src="imagens/senhor.jpg" alt="imagem">'
                genero = 'senhor'
                
                if (imc < 22){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> BAIXO </strong> para um ${genero} de ${idade} anos.`    
                }
                else if  (imc >= 22 && imc <= 26){
                    classificacaoIMC.innerHTML = `Seu IMC é considerado <strong> NORMAL </strong> para um ${genero} de ${idade} anos.`
                }
                else if  (imc > 26 ){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> ALTO </strong> para um ${genero} de ${idade} anos.`
                }  
            }
        }
        
        // Sexo Feminino
        else if (sexo[1].checked) {
            pesoIdeal.innerHTML = `E o seu peso ideal é <strong>${pesoIdealFem.toFixed(2)} kg </strong>`
            
            //Teste de Idade Menina
            if (idade >=5 && idade <= 10){
                imagem.innerHTML = '<img src="imagens/menina.jpg" alt="imagem">'
                genero = 'menina'

                if (imc < 14.5){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> BAIXO </strong> para uma ${genero} de ${idade} anos.`    
                }
                else if  (imc >= 14.5 && imc <= 17){
                    classificacaoIMC.innerHTML = `Seu IMC é considerado <strong> NORMAL </strong> para uma ${genero} de ${idade} anos.`
                }
                else if  (imc > 17 ){
                    classificacaoIMC.innerHTML = `Atenção! Seu IMC é considerado <strong> ALTO </strong> para uma ${genero} de ${idade} anos.`
                }
            }
            
            //Teste de Idade Garota
            else if (idade >= 11 && idade <=17) {
                imagem.innerHTML = '<img src="imagens/garota.jpg" alt="imagem">'
                genero = 'garota'

                if (imc <= 18){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> BAIXO </strong> para uma ${genero} de ${idade} anos.`    
                }
                else if  (imc > 18 && imc <= 22){
                    classificacaoIMC.innerHTML = `Seu IMC é considerado <strong> NORMAL </strong> para uma ${genero} de ${idade} anos.`
                }
                else if  (imc > 22 ){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> ALTO </strong> para uma ${genero} de ${idade} anos.`
                }
            }

            //Teste de Idade Mulher
            else if (idade >= 18 && idade <=64) {
                imagem.innerHTML = '<img src="imagens/mulher.jpg" alt="imagem">'
                genero = 'mulher'

                if (imc <= 18.5){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> BAIXO </strong> para uma ${genero} de ${idade} anos.`    
                }
                else if  (imc > 18.5 && imc <= 24.99){
                    classificacaoIMC.innerHTML = `Seu IMC é considerado <strong> NORMAL </strong> para uma ${genero} de ${idade} anos.`
                }
                else if  (imc >= 25 ){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> ALTO </strong> para uma ${genero} de ${idade} anos.`
                }                
            }

            //Teste de Idade Senhora
            else if (idade >= 65){
                imagem.innerHTML = '<img src="imagens/senhora.jpg" alt="imagem">'
                genero = 'senhora'

                if (imc < 22){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> BAIXO </strong> para uma ${genero} de ${idade} anos.`    
                }
                else if  (imc >= 22 && imc <= 26){
                    classificacaoIMC.innerHTML = `Seu IMC é considerado <strong> NORMAL </strong> para uma ${genero} de ${idade} anos.`
                }
                else if  (imc > 26 ){
                    classificacaoIMC.innerHTML = `Cuidado! Seu IMC é considerado <strong> ALTO </strong> para uma ${genero} de ${idade} anos.`
                }  
            }
        }
    }
 }    
