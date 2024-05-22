async function main() {
    const data = await fetch('./json/NycPropertySales.json')
        .then(response => response.json())
        .then(data => data)
    console.log(data)
}
main()