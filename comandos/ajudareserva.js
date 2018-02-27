exports.run = (client, message, arg) => {
 
        message.channel.send("**Enviei a lista de Ajuda no seu privado** :kissing_smiling_eyes:")
        message.author.send({embed:{
          
          title:"Informação" ,
          
          description: ` **Eae, esses são os *comandos* que já fiz até agora**> 
          \n 
          \n :small_red_triangle_down: __**Lista de Comandos**__ :small_red_triangle_down:  
           :small_orange_diamond:  **r!server**  
           :small_orange_diamond:  **r!ajuda**
           :small_orange_diamond:  **r!invit** 
           :small_orange_diamond:  **r!info** 
           :small_orange_diamond:  **r!inf** 
           :small_orange_diamond:  **r!ping** 
           :small_orange_diamond:  **r!serveinvite**
           :small_orange_diamond:  **r!prefix**
           :small_orange_diamond:  **r!user**
           
         
          \n
          \n :small_red_triangle_down: __**ADM**__ :small_red_triangle_down:  
          \n
          :small_orange_diamond:  **r!clear** 
          :small_orange_diamond:  **r!ban** 
          :small_orange_diamond:  **r!kick** 
          \n :small_red_triangle_down: __**Sistema de level**__ :small_red_triangle_down:  
          \n
          :small_orange_diamond:  **r!perfil** 
          :small_orange_diamond:  **r!pontos** 
          :small_orange_diamond:  **r!level** 
         `,
          color: 0x00BFFF
          
    } 
    
      
    })
    }    
    