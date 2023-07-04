$(document).ready(function () { $('a.tooltipEl, img.tooltipEl').tooltip({ classes: { "ui-tooltip": "highlight" }, position: { my: 'left center', at: 'right+0 center' }, content: function (result) { $.post('', { animeid: $(this).attr('animeid') }, function (data) { result(data); }); } }); }); $(document).ready(function () { $("#searching").keyup(function () { let searchText = $(this).val(); if (searchText != "") { $.ajax({ url: "/theme/6anime/pages/ajax.search.php", method: "post", data: { query: searchText, }, success: function (response) { $("#search-suggest").html(response); }, }); } else { $("#search-suggest").html(""); } }); $(document).on("click", "a", function () { $("#searching").val($(this).text()); $("#search-suggest").html(""); }); });


function saveToPlaylist(listName, animeName, animeUrl, imgUrl) {
    // Retrieve the current list from local storage
    var list = JSON.parse(localStorage.getItem(listName)) || [];

    // Check if the item already exists in the list
    var exists = list.some(function(item) {
        return item.animeName === animeName;
    });

    // Add the new item to the list if it doesn't already exist
    if (!exists) {
        list.push({
            animeName: animeName,
            animeUrl: animeUrl,
            imgUrl: imgUrl
        });

        // Save the updated list back to local storage
        localStorage.setItem(listName, JSON.stringify(list));
    }
}

function checkIfBookmarked(listName, animeName) {
    console.log('checkIfBookmarked called with', listName, animeName);

    // Retrieve the current list from local storage
    var list = JSON.parse(localStorage.getItem(listName)) || [];
    console.log('list', list);

    // Check if the item already exists in the list
    var exists = list.some(function(item) {
        return item.animeName === animeName;
    });
    console.log('exists', exists);

   // Add the custom CSS class to the "Save to Playlist" button if the item already exists
    var savbutton = document.getElementById('save-to-playlist-button');
    if (exists) {
        savbutton.classList.add('active');
         console.log('active class add');
        savbutton.innerText = 'Saved to list';
    } 
}
