function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  Images/About Me Images/male0001.png
     Images/About Me Images/male0001.png
     Images/About Me Images/male0002.png
     Images/About Me Images/male0003.png
     Images/About Me Images/male0004.png
     Images/About Me Images/male0005.png
     Images/About Me Images/male0006.png
     Images/About Me Images/male0007.png
     Images/About Me Images/male0008.png
     Images/About Me Images/male0009.png
     Images/About Me Images/male0010.png
     Images/About Me Images/male0011.png
     Images/About Me Images/male0012.png
     Images/About Me Images/male0013.png
     Images/About Me Images/male0014.png
     Images/About Me Images/male0015.png
     Images/About Me Images/male0016.png
     Images/About Me Images/male0017.png
     Images/About Me Images/male0018.png
     Images/About Me Images/male0019.png
     Images/About Me Images/male0020.png
     Images/About Me Images/male0021.png
     Images/About Me Images/male0022.png
     Images/About Me Images/male0023.png
     Images/About Me Images/male0024.png
     Images/About Me Images/male0025.png
     Images/About Me Images/male0026.png
     Images/About Me Images/male0027.png
     Images/About Me Images/male0028.png
     Images/About Me Images/male0029.png
     Images/About Me Images/male0030.png
     Images/About Me Images/male0031.png
     Images/About Me Images/male0032.png
     Images/About Me Images/male0033.png
     Images/About Me Images/male0034.png
     Images/About Me Images/male0035.png
     Images/About Me Images/male0036.png
     Images/About Me Images/male0037.png
     Images/About Me Images/male0038.png
     Images/About Me Images/male0039.png
     Images/About Me Images/male0040.png
     Images/About Me Images/male0041.png
     Images/About Me Images/male0042.png
     Images/About Me Images/male0043.png
     Images/About Me Images/male0044.png
     Images/About Me Images/male0045.png
     Images/About Me Images/male0046.png
     Images/About Me Images/male0047.png
     Images/About Me Images/male0048.png
     Images/About Me Images/male0049.png
     Images/About Me Images/male0050.png
     Images/About Me Images/male0051.png
     Images/About Me Images/male0052.png
     Images/About Me Images/male0053.png
     Images/About Me Images/male0054.png
     Images/About Me Images/male0055.png
     Images/About Me Images/male0056.png
     Images/About Me Images/male0057.png
     Images/About Me Images/male0058.png
     Images/About Me Images/male0059.png
     Images/About Me Images/male0060.png
     Images/About Me Images/male0061.png
     Images/About Me Images/male0062.png
     Images/About Me Images/male0063.png
     Images/About Me Images/male0064.png
     Images/About Me Images/male0065.png
     Images/About Me Images/male0066.png
     Images/About Me Images/male0067.png
     Images/About Me Images/male0068.png
     Images/About Me Images/male0069.png
     Images/About Me Images/male0070.png
     Images/About Me Images/male0071.png
     Images/About Me Images/male0072.png
     Images/About Me Images/male0073.png
     Images/About Me Images/male0074.png
     Images/About Me Images/male0075.png
     Images/About Me Images/male0076.png
     Images/About Me Images/male0077.png
     Images/About Me Images/male0078.png
     Images/About Me Images/male0079.png
     Images/About Me Images/male0080.png
     Images/About Me Images/male0081.png
     Images/About Me Images/male0082.png
     Images/About Me Images/male0083.png
     Images/About Me Images/male0084.png
     Images/About Me Images/male0085.png
     Images/About Me Images/male0086.png
     Images/About Me Images/male0087.png
     Images/About Me Images/male0088.png
     Images/About Me Images/male0089.png
     Images/About Me Images/male0090.png
     Images/About Me Images/male0091.png
     Images/About Me Images/male0092.png
     Images/About Me Images/male0093.png
     Images/About Me Images/male0094.png
     Images/About Me Images/male0095.png
     Images/About Me Images/male0096.png
     Images/About Me Images/male0097.png
     Images/About Me Images/male0098.png
     Images/About Me Images/male0099.png
     Images/About Me Images/male0100.png
     Images/About Me Images/male0101.png
     Images/About Me Images/male0102.png
     Images/About Me Images/male0103.png
     Images/About Me Images/male0104.png
     Images/About Me Images/male0105.png
     Images/About Me Images/male0106.png
     Images/About Me Images/male0107.png
     Images/About Me Images/male0108.png
     Images/About Me Images/male0109.png
     Images/About Me Images/male0110.png
     Images/About Me Images/male0111.png
     Images/About Me Images/male0112.png
     Images/About Me Images/male0113.png
     Images/About Me Images/male0114.png
     Images/About Me Images/male0115.png
     Images/About Me Images/male0116.png
     Images/About Me Images/male0117.png
     Images/About Me Images/male0118.png
     Images/About Me Images/male0119.png
     Images/About Me Images/male0120.png
     Images/About Me Images/male0121.png
     Images/About Me Images/male0122.png
     Images/About Me Images/male0123.png
     Images/About Me Images/male0124.png
     Images/About Me Images/male0125.png
     Images/About Me Images/male0126.png
     Images/About Me Images/male0127.png
     Images/About Me Images/male0128.png
     Images/About Me Images/male0129.png
     Images/About Me Images/male0130.png
     Images/About Me Images/male0131.png
     Images/About Me Images/male0132.png
     Images/About Me Images/male0133.png
     Images/About Me Images/male0134.png
     Images/About Me Images/male0135.png
     Images/About Me Images/male0136.png
     Images/About Me Images/male0137.png
     Images/About Me Images/male0138.png
     Images/About Me Images/male0139.png
     Images/About Me Images/male0140.png
     Images/About Me Images/male0141.png
     Images/About Me Images/male0142.png
     Images/About Me Images/male0143.png
     Images/About Me Images/male0144.png
     Images/About Me Images/male0145.png
     Images/About Me Images/male0146.png
     Images/About Me Images/male0147.png
     Images/About Me Images/male0148.png
     Images/About Me Images/male0149.png
     Images/About Me Images/male0150.png
     Images/About Me Images/male0151.png
     Images/About Me Images/male0152.png
     Images/About Me Images/male0153.png
     Images/About Me Images/male0154.png
     Images/About Me Images/male0155.png
     Images/About Me Images/male0156.png
     Images/About Me Images/male0157.png
     Images/About Me Images/male0158.png
     Images/About Me Images/male0159.png
     Images/About Me Images/male0160.png
     Images/About Me Images/male0161.png
     Images/About Me Images/male0162.png
     Images/About Me Images/male0163.png
     Images/About Me Images/male0164.png
     Images/About Me Images/male0165.png
     Images/About Me Images/male0166.png
     Images/About Me Images/male0167.png
     Images/About Me Images/male0168.png
     Images/About Me Images/male0169.png
     Images/About Me Images/male0170.png
     Images/About Me Images/male0171.png
     Images/About Me Images/male0172.png
     Images/About Me Images/male0173.png
     Images/About Me Images/male0174.png
     Images/About Me Images/male0175.png
     Images/About Me Images/male0176.png
     Images/About Me Images/male0177.png
     Images/About Me Images/male0178.png
     Images/About Me Images/male0179.png
     Images/About Me Images/male0180.png
     Images/About Me Images/male0181.png
     Images/About Me Images/male0182.png
     Images/About Me Images/male0183.png
     Images/About Me Images/male0184.png
     Images/About Me Images/male0185.png
     Images/About Me Images/male0186.png
     Images/About Me Images/male0187.png
     Images/About Me Images/male0188.png
     Images/About Me Images/male0189.png
     Images/About Me Images/male0190.png
     Images/About Me Images/male0191.png
     Images/About Me Images/male0192.png
     Images/About Me Images/male0193.png
     Images/About Me Images/male0194.png
     Images/About Me Images/male0195.png
     Images/About Me Images/male0196.png
     Images/About Me Images/male0197.png
     Images/About Me Images/male0198.png
     Images/About Me Images/male0199.png
     Images/About Me Images/male0200.png
     Images/About Me Images/male0201.png
     Images/About Me Images/male0202.png
     Images/About Me Images/male0203.png
     Images/About Me Images/male0204.png
     Images/About Me Images/male0205.png
     Images/About Me Images/male0206.png
     Images/About Me Images/male0207.png
     Images/About Me Images/male0208.png
     Images/About Me Images/male0209.png
     Images/About Me Images/male0210.png
     Images/About Me Images/male0211.png
     Images/About Me Images/male0212.png
     Images/About Me Images/male0213.png
     Images/About Me Images/male0214.png
     Images/About Me Images/male0215.png
     Images/About Me Images/male0216.png
     Images/About Me Images/male0217.png
     Images/About Me Images/male0218.png
     Images/About Me Images/male0219.png
     Images/About Me Images/male0220.png
     Images/About Me Images/male0221.png
     Images/About Me Images/male0222.png
     Images/About Me Images/male0223.png
     Images/About Me Images/male0224.png
     Images/About Me Images/male0225.png
     Images/About Me Images/male0226.png
     Images/About Me Images/male0227.png
     Images/About Me Images/male0228.png
     Images/About Me Images/male0229.png
     Images/About Me Images/male0230.png
     Images/About Me Images/male0231.png
     Images/About Me Images/male0232.png
     Images/About Me Images/male0233.png
     Images/About Me Images/male0234.png
     Images/About Me Images/male0235.png
     Images/About Me Images/male0236.png
     Images/About Me Images/male0237.png
     Images/About Me Images/male0238.png
     Images/About Me Images/male0239.png
     Images/About Me Images/male0240.png
     Images/About Me Images/male0241.png
     Images/About Me Images/male0242.png
     Images/About Me Images/male0243.png
     Images/About Me Images/male0244.png
     Images/About Me Images/male0245.png
     Images/About Me Images/male0246.png
     Images/About Me Images/male0247.png
     Images/About Me Images/male0248.png
     Images/About Me Images/male0249.png
     Images/About Me Images/male0250.png
     Images/About Me Images/male0251.png
     Images/About Me Images/male0252.png
     Images/About Me Images/male0253.png
     Images/About Me Images/male0254.png
     Images/About Me Images/male0255.png
     Images/About Me Images/male0256.png
     Images/About Me Images/male0257.png
     Images/About Me Images/male0258.png
     Images/About Me Images/male0259.png
     Images/About Me Images/male0260.png
     Images/About Me Images/male0261.png
     Images/About Me Images/male0262.png
     Images/About Me Images/male0263.png
     Images/About Me Images/male0264.png
     Images/About Me Images/male0265.png
     Images/About Me Images/male0266.png
     Images/About Me Images/male0267.png
     Images/About Me Images/male0268.png
     Images/About Me Images/male0269.png
     Images/About Me Images/male0270.png
     Images/About Me Images/male0271.png
     Images/About Me Images/male0272.png
     Images/About Me Images/male0273.png
     Images/About Me Images/male0274.png
     Images/About Me Images/male0275.png
     Images/About Me Images/male0276.png
     Images/About Me Images/male0277.png
     Images/About Me Images/male0278.png
     Images/About Me Images/male0279.png
     Images/About Me Images/male0280.png
     Images/About Me Images/male0281.png
     Images/About Me Images/male0282.png
     Images/About Me Images/male0283.png
     Images/About Me Images/male0284.png
     Images/About Me Images/male0285.png
     Images/About Me Images/male0286.png
     Images/About Me Images/male0287.png
     Images/About Me Images/male0288.png
     Images/About Me Images/male0289.png
     Images/About Me Images/male0290.png
     Images/About Me Images/male0291.png
     Images/About Me Images/male0292.png
     Images/About Me Images/male0293.png
     Images/About Me Images/male0294.png
     Images/About Me Images/male0295.png
     Images/About Me Images/male0296.png
     Images/About Me Images/male0297.png
     Images/About Me Images/male0298.png
     Images/About Me Images/male0299.png
     Images/About Me Images/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
