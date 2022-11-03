<?php
    header('Content-Type: application/json; charset=utf-8');
    $_DATA = json_decode(file_get_contents("php://input"),true);
    class promedio{

        public $sumA;
        public $canA;
        public $sumB;
        public $canB;
        public $sumC;
        public $canC;

        public function __construct( nt $sumA,int $canA,int $sumB,int $canB, int $sumC,int $canC){
            $this->sumA = $sumA;
            $this->canA = $canA;
            $this->sumB = $sumB;
            $this->canB = $canB;
            $this->sumC = $sumC;
            $this->canC = $canC;
        }


        public function promedioF():string{

            $sumA = $this->sumA;
            $canA = $this->canA;
            $sumB = $this->sumB;
            $canB = $this->canB;
            $sumC = $this->sumC;
            $canC = $this->canC;

            $canA<1?$proA=0:$proA = $sumA/$canA;
            $canB<1?$proB=0:$proB = $sumB/$canB;
            $canC<1?$proC=0:$proC = $sumC/$canC;

            if($proA>$proB && $proA>$proC){
                if($proB>$proC){
                    return "C";
                } else{
                    return "B";
                }
            } else if($proB>$proA && $proB>$proC){
                if($proA>$proC){
                    return "C";
                } else{
                    return "A";
                }
            } else if($proC>$proA && $proC>$proB){
                if($proA>$proB){
                    return "B";
                } else{
                    return "A";
                }
            } else{
                return "A, B, C";
            }
        }
    }
    $lista = new promedio(sumA:$_DATA[0],canA:$_DATA[1],sumB:$_DATA[2],canB:$_DATA[3],sumC:$_DATA[4],canC:$_DATA[5]);
    echo($lista->promedioF());
?>

?>




        

          
