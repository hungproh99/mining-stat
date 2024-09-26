$(document).ready(function () {
    $.ajax({
        url: 'https://api.nanopool.org/v1/xmr/user/43rdEeVe4EZjW1yvEzejEL34eTdT7jqvB2Ewz1KBKxLfNdpUZcUYDNofkQKwZD1M2CTdUuA3PvSH1f48MtZECdfCTfiToKv',
        type: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (response) {
            if (response.status) {
                const stats = response.data;

                $('#unconfirmed_balance').text(stats.unconfirmed_balance);
                $('#balance').text(stats.balance);
                $('#vnd').text(stats.balance * 4065474);
                $('#usd').text(stats.balance * 165);
                $('#hashrate').text(stats.hashrate);
            } else {
                console.error('API Error:', response);
            }
        },
        error: function (xhr, status, error) {
            console.error('xhr:', xhr);
            console.error('status:', status);
            console.error('Error:', error);
        }
    });
});