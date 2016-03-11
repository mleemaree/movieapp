// (function(){
//   function initMap() {
//         var mapDiv = document.getElementById('map');
//         var options = {         
//             zoom: 14,
//              styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
//         }
//         var map = new google.maps.Map(mapDiv, options);

//         //Yelmo Cines Icaria Marker

//         var yelmo = new google.maps.Marker({
//             position: new google.maps.LatLng(41.390749, 2.198057),
//             title: 'Yelmo Icaria',
//             id: '1',
//             map: map,
//             icon: '<%#= image_url('icons/marker.png') %>',
//             contentString:'<strong>Yelmo Cines Icaria</strong><br>Calle Salvador Espriu, 61<br>08006 Barcelona<br>'    
//         });

//         // Verdi HD Marker
        
//         var verdiHD = new google.maps.Marker({
//             position: new google.maps.LatLng(41.402754, 2.159574),
//             title: 'Verdi HD',
//             map: map,
//             id: '3',
//             icon: '<%= image_url('icons/marker.png') %>',
//             contentString:'<strong>Verdi HD</strong><br>Carrer de Torrijos, 14<br>08012 Barcelona<br>'   
//         });

//         // Renoir Floridablanca Marker
        
//         var floridablanca = new google.maps.Marker({
//             position: new google.maps.LatLng(41.381684, 2.162566),
//             title: 'Renoir Floridablanca',
//             map: map,
//             id: '2',
//             icon: '<%= image_url('icons/marker.png') %>',
//             contentString:'<strong>Renoir Floridablanca</strong><br>Calle Floridablanca, 135<br>08011 Barcelona<br>'    
//         });

//         // Cinema Malda Marker
         
//         var malda = new google.maps.Marker({
//            position: new google.maps.LatLng(41.383169, 2.173896),
//             title: 'Cinema Maldà',
//             map: map,
//             id: '7',
//             icon: '<%= image_url('icons/marker.png') %>',
//             contentString:'<strong>Cinema Maldà</strong><br>Carrer del Pi, 5<br>08002 Barcelona<br>'    
//         });
        
//         // Filmoteca de Catalunya Marker
        
//          var filmoteca = new google.maps.Marker({
//            position: new google.maps.LatLng(41.378421, 2.171233),
//             title: 'Filmoteca de Catalunya',
//             map: map,
//             id: '8',
//             icon: '<%= image_url('icons/marker.png') %>',
//             contentString:'<strong>Filmoteca de Catalunya</strong><br>Plaça de Salvador Seguí, 1<br>08001 Barcelona<br>'    
//         });

//         // Phenomena Marker
        
//          var phenomena = new google.maps.Marker({
//            position: new google.maps.LatLng(41.409098, 2.171725),
//             title: 'Phenomena',
//             map: map,
//             id: '4',
//             icon: '<%= image_url('icons/marker.png') %>',
//             contentString:'<strong>Phenomena</strong><br>C/ Sant Antoni Maria Claret, 168<br>08025 Barcelona<br>'    
//         });

//         // Balmes Multicines Marker
        
//          var balmes = new google.maps.Marker({
//            position: new google.maps.LatLng(41.407180, 2.138601),
//             title: 'Balmes Multicines',
//             map: map,
//             id: '9',
//             icon: '<%= image_url('icons/marker.png') %>',
//             contentString:'<strong>Balmes Multicines</strong><br>Carrer de Balmes, 422-424<br>08022 Barcelona<br>'    
//         });

//         // Verdi Park HD Multicines Marker
        
//          var verdipark = new google.maps.Marker({
//            position: new google.maps.LatLng(41.404427, 2.157682),
//             title: 'Verdi Park HD',
//             map: map,
//             id: '10',
//             icon: '<%= image_url('icons/marker.png') %>',
//             contentString:'<strong>Verdi Park HD</strong><br>Calle Torrijos 49<br>08012 Barcelona<br>'    
//         });

//         // Cine Texas Multicines Marker
        
//          var texas = new google.maps.Marker({
//            position: new google.maps.LatLng(41.402039, 2.163669),
//             title: 'Cines Texas',
//             map: map,
//             id: '6',
//             icon: '<%= image_url('icons/marker.png') %>',
//             contentString:'<strong>Cines Texas</strong><br>Carrer de Bailèn, 205<br>08037 Barcelona<br>'    
//         });

//         // Méliès Cinemes Multicines Marker
        
//          var melies = new google.maps.Marker({
//            position: new google.maps.LatLng(41.385198, 2.156976),
//             title: 'Méliès Cinemes',
//             map: map,
//             id: '5',
//             icon: '<%= image_url('icons/marker.png') %>',
//             contentString:'<strong>Méliès Cinemes</strong><br>Carrer de Villarroel, 102<br>08011 Barcelona<br>'    
//         });

//         var infowindow = new google.maps.InfoWindow();
//         var markers = [melies, texas, verdipark, balmes, phenomena, filmoteca, malda, floridablanca, verdiHD, yelmo];

//         var bounds = new google.maps.LatLngBounds();
//         for (var i = 0; i < markers.length; i++) {
//             bounds.extend(markers[i].getPosition());
//         }

//         map.fitBounds(bounds);

//         for(var i = 0, marker; marker = markers[i]; i++){
//             marker.setVisible(false);
//             google.maps.event.addListener(marker, 'click', function(e){

//                 $('.cinema-info').removeClass('marker-visible');

//                 $('.cinema-info')
//                     .find('ul')
//                     .children()
//                     .addClass('hidden');

//                 infowindow.close();
//                 infowindow = new google.maps.InfoWindow({   
//                     content: this.contentString                           
//                 });

//                 map.setZoom(16);
//                 map.setCenter(this.getPosition());

//                 infowindow.open(map, this);

//                 switch(this.id){
//                     case "1":
//                         $('.marker-1')
//                             .addClass('marker-visible')
//                             .find('ul')
//                             .children().removeClass('hidden');
//                         break;
//                     case "2":
//                         $('.marker-2')
//                             .addClass('marker-visible')
//                             .find('ul')
//                             .children().removeClass('hidden');
//                         break;
//                     case "3":
//                         $('.marker-3')
//                             .addClass('marker-visible')
//                             .find('ul')
//                             .children().removeClass('hidden');
//                         break;
//                     case "4":
//                         $('.marker-4')
//                             .addClass('marker-visible')
//                             .find('ul')
//                             .children().removeClass('hidden');
//                         break;
//                     case "5":
//                         $('.marker-5')
//                             .addClass('marker-visible')
//                             .find('ul')
//                             .children().removeClass('hidden');
//                         break;
//                     case "6":
//                         $('.marker-6')
//                             .addClass('marker-visible')
//                             .find('ul')
//                             .children().removeClass('hidden');
//                         break;
//                     case "7":
//                         $('.marker-7')
//                             .addClass('marker-visible')
//                             .find('ul')
//                             .children().removeClass('hidden');
//                         break;
//                     case "8":
//                         $('.marker-8')
//                             .addClass('marker-visible')
//                             .find('ul')
//                             .children().removeClass('hidden');
//                         break;
//                     case "9":
//                         $('.marker-9')
//                             .addClass('marker-visible')
//                             .find('ul')
//                             .children().removeClass('hidden');
//                         break;
//                     case "10":
//                         $('.marker-10')
//                             .addClass('marker-visible')
//                             .find('ul')
//                             .children().removeClass('hidden');
//                         break;
//                     default:
//                         console.log("no cinema");
//                 }
//             }); 
//         }

//         MovieApp.markerShow = function(){

//             var markers = [melies, texas, verdipark, balmes, phenomena, filmoteca, malda, floridablanca, verdiHD, yelmo];
//             markers.forEach(function(marker){
//                 marker.setVisible(false);
//             });

//             MovieApp.movie_selection.all.cinemas.forEach(function(cinema){
//                 switch(cinema.id){
//                     case 1:
//                         yelmo.setVisible(true);
//                         break;
//                     case 2:
//                         floridablanca.setVisible(true);
//                         break;
//                     case 3:
//                         verdiHD.setVisible(true);
//                         break;
//                     case 4:
//                         phenomena.setVisible(true);
//                         break;
//                     case 5:
//                         melies.setVisible(true);
//                         break;
//                     case 6:
//                         texas.setVisible(true);
//                         break;
//                     case 7:
//                         malda.setVisible(true);
//                         break;
//                     case 8:
//                         filmoteca.setVisible(true);
//                         break;
//                     case 9:
//                         balmes.setVisible(true);
//                         break;
//                     case 10:
//                         verdipark.setVisible(true);
//                         break;
//                     default:
//                         console.log("no cinema");
//                 }
//             });
//         }

//       }
// })();