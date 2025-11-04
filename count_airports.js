const fs = require('fs');

// 读取文件内容
const content = fs.readFileSync('app.js', 'utf8');

// 查找airports数组的定义
const airportsStart = content.indexOf('const airports = [');
const airportsEnd = content.indexOf('];', airportsStart);
const airportsContent = content.substring(airportsStart + 15, airportsEnd);

// 统计每个国家的机场数量
const countryCount = {};
const lines = airportsContent.split('\n');
lines.forEach(line => {
    if (line.includes('country:')) {
        const countryMatch = line.match(/country:\s*['"]([^'"]*)['"]/);
        if (countryMatch) {
            const country = countryMatch[1];
            countryCount[country] = (countryCount[country] || 0) + 1;
        }
    }
});

// 输出结果
console.log('每个国家的机场数量:');
Object.entries(countryCount).forEach(([country, count]) => {
    console.log(`${country}: ${count}个${count < 5 ? ' (需要添加)' : ''}`);
});