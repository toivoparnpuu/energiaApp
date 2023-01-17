# Ideed
* console.table()
* csv faili upload ja edastamine backendi

```
        let rows = data.replace(/"|'/g, '').split('\n');
        const m = rows.slice(skip + 1)
        let currentDay = '0';
        //let dailyHum = [];
        let dailyTemp = [];
        let result = {};
        m.forEach(e => {
                const elements = e.split(delimiter);
                const day = new Date(elements[1]);
                const temp = Number(elements[2]);
                //const humidity = elements[3];
                const eeDate = [day.getDate(), day.getMonth() + 1, day.getFullYear()].join('.');

                if (currentDay === eeDate) {
                        //dailyHum.push(humidity);
                        dailyTemp.push(temp);

                } else {
                        result[currentDay] = (dailyTemp.reduce((a, b) => a + b, 0) / dailyTemp.length).toFixed(1);
                        dailyTemp = [];
                        dailyTemp.push(temp);
                        currentDay = eeDate;

                }

        });
        console.log(result);

        return result;
```