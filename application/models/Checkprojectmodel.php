<?php
class Checkprojectmodel extends CI_Model{
	
	    function checkartistexist($person,$project){
           $count=0;
            $this->db->select('count(peopleid) as count');    
            $this->db->from('callsheet');
            $this->db->join('artist_schedule', 'artist_schedule.id = callsheet.aid');
            $this->db->where('callsheet.peopletypeid',1);	
            $this->db->where('callsheet.peopleid',$person);	
            $this->db->where('artist_schedule.projectid',$project);			
            $hasil=$this->db->get();
           foreach($hasil->result_array() as $getcount){
            $count=$getcount['count'];
           }
           if($count >0){
               return $count;
           }else{
            $this->db->select('count(peopleid) as count');    
            $this->db->from('peopleattdance');
            $this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
            $this->db->where('peopleattdance.peopletypeid',1);	
            $this->db->where('peopleattdance.peopleid',$person);	
            $this->db->where('actualschedual.projectid',$project);			
            $hasil2=$this->db->get();
           foreach($hasil2->result_array() as $getcount){
            $count=$getcount['count'];
           } 
           return $count;
           }
        }
        function checproductionexist($person,$project){
            $count=0;
            $this->db->select('count(peopleid) as count');    
            $this->db->from('callsheet');
            $this->db->join('artist_schedule', 'artist_schedule.id = callsheet.aid');
            $this->db->where('callsheet.peopletypeid',2);	
            $this->db->where('callsheet.peopleid',$person);	
            $this->db->where('artist_schedule.projectid',$project);			
            $hasil=$this->db->get();
           foreach($hasil->result_array() as $getcount){
            $count=$getcount['count'];
           }
           if($count >0){
               return $count;
           }else{
            $this->db->select('count(peopleid) as count');    
            $this->db->from('peopleattdance');
            $this->db->join('actualschedual', 'actualschedual.id = peopleattdance.aid');
            $this->db->where('peopleattdance.peopletypeid',2);	
            $this->db->where('peopleattdance.peopleid',$person);	
            $this->db->where('actualschedual.projectid',$project);			
            $hasil2=$this->db->get();
           foreach($hasil2->result_array() as $getcount){
            $count=$getcount['count'];
           } 
           return $count;
           } 
        }
		
		
}
?>