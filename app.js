function correlation(x, y) {
    // Calculate the mean of the two arrays
    let x̄ = x.reduce((a, b) => a + b) / x.length;
    let ȳ = y.reduce((a, b) => a + b) / y.length;
  
    // Calculate the correlation coefficient
    let r = 0;
    for (let i = 0; i < x.length; i++) {
      r += (x[i] - x̄) * (y[i] - ȳ);
    }
    r /= Math.sqrt(x.map(xi => (xi - x̄) ** 2).reduce((a, b) => a + b)) * Math.sqrt(y.map(yi => (yi - ȳ) ** 2).reduce((a, b) => a + b));
  
    return r;
  }
  
const dataset1 =[]
const dataset2 =[]
