const initialState = {


    /*GLOBAIS*/
    url:'https://daniel6.websiteseguro.com/app/',
    /*GLOBAIS*/


    id_tb_user:0,
    c_nome:'',
    c_email:'',
    c_telefone:0,
    id_tb_tipo:0,
    tipo_evento:0,

  
    //LIVE
    id_tb_status:0,
    c_video:'',
    id_tb_tipo:0,
    c_texto:'',
    passou:'nao',
    
    //PROMOCOES
    status_promo:'',

    //LOGIN
    verifica_login:'LoginInicio',
    redireciona_login:'',

    //PROMOCOES
    verifica_promo:'PromocoesVerifica',
    promo_local:false,
  //  redireciona_promo:'0',

    //VINHETA
    passou_vinheta:false,
    //VINHETA

    //BUSCA
    busca:'',
    //VINHETA

    id_tb_status_banner:0,
    c_texto1_banner:0,
    c_texto2_banner:0,
    c_texto3_banner:0,


   
};

const LoginReducer = (state = [], action) => {
    if(state.length == 0){
        return initialState;
    }

    /*GLOBAIS*/
     if(action.type == 'Edit_url'){
        return { ...state, url:action.payload.url };
    }
    /*GLOBAIS*/

    if(action.type == 'Edit_id_tb_user'){
        return { ...state, id_tb_user:action.payload.id_tb_user };
    }
    if(action.type == 'Edit_c_nome'){
        return { ...state, c_nome:action.payload.c_nome };
    }
    if(action.type == 'Edit_c_email'){
        return { ...state, c_email:action.payload.c_email };
    }
    if(action.type == 'Edit_c_telefone'){
        return { ...state, c_telefone:action.payload.c_telefone };
    }


    if(action.type == 'Edit_tipo_evento'){
        return { ...state, tipo_evento:action.payload.tipo_evento };
    }

    //LIVE
    if(action.type == 'Edit_id_tb_status'){
        return { ...state, id_tb_status:action.payload.id_tb_status };
    }
    if(action.type == 'Edit_c_video'){
        return { ...state, c_video:action.payload.c_video };
    }
    if(action.type == 'Edit_id_tb_tipo'){
        return { ...state, id_tb_tipo:action.payload.id_tb_tipo };
    }
    if(action.type == 'Edit_c_texto'){
        return { ...state, c_texto:action.payload.c_texto };
    }
    if(action.type == 'Edit_passou'){
        return { ...state, passou:action.payload.passou };
    }
    
    //LIVE

    //PROMOCOES
    if(action.type == 'Edit_status_promo'){
        return { ...state, status_promo:action.payload.status_promo };
    }
    if(action.type == 'Edit_promo_local'){
        return { ...state, promo_local:action.payload.promo_local };
    }

   //PROMOCOES

    
    if(action.type == 'Edit_verifica_login'){
        return { ...state, verifica_login:action.payload.verifica_login };
    }

    
    if(action.type == 'Edit_verifica_promo'){
        return { ...state, verifica_promo:action.payload.verifica_promo };
    }

    //LOGIN
    if(action.type == 'Edit_redireciona_login'){
        return { ...state, redireciona_login:action.payload.redireciona_login };
    }
    //LOGIN

    //VINHETA
    if(action.type == 'Edit_passou_vinheta'){
        return { ...state, passou_vinheta:action.payload.passou_vinheta };
    }
    //VINHETA

    //BUSCA
    if(action.type == 'Edit_busca'){
        return { ...state, busca:action.payload.busca };
    }
    //BUSCA

  

    //BUSCA
    if(action.type == 'Edit_id_tb_status_banner'){
        return { ...state, id_tb_status_banner:action.payload.id_tb_status_banner };
    }

    if(action.type == 'Edit_c_texto1_banner'){
        return { ...state, c_texto1_banner:action.payload.c_texto1_banner };
    }

    if(action.type == 'Edit_c_texto2_banner'){
        return { ...state, c_texto2_banner:action.payload.c_texto2_banner };
    }

    if(action.type == 'Edit_c_texto3_banner'){
        return { ...state, c_texto3_banner:action.payload.c_texto3_banner };
    }


    //BUSCA

  




    return state;
};

export default LoginReducer;


