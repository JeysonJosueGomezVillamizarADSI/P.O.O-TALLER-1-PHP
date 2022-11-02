<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=utf-8');
    $_DATA = json_decode(file_get_contents("php://input"),true);
    class factura{
        public $codigo;
        public $unidades;
        
        public function __construct(int $codigo, int $unidades){
            $this->codigo = $codigo;
            $this->unidades = $unidades;
        }


        public function numerocodigo(){
            $codigo=match($this->codigo){
                1=> $codigo =20400,
                2=> $codigo =34896,
                3=>$codigo =37850,
                4=>$codigo =40345,
                default=>$codigo="Codigo Incorrecto"
            };
            return $codigo;
        }

        public function totalpagar():string{
            $codigo=$this->numerocodigo();
            $totalpagar=$codigo*$this->unidades;
            return $totalpagar;
        }
    }
        
    $listado=new factura(codigo:$_DATA['codigo'],unidades:$_DATA['unidades']);
    echo ($listado->totalpagar());

?>




        

          
