const SitemapGenerator = require("sitemap-generator");
const path = require("path");

// 웹 사이트 URL 설정 (주소는 해당 프로젝트에 맞게 수정)
const websiteUrl = "https://web-spark-v2-rt92alk7z1x0g.sel4.cloudtype.app";

// sitemap 생성 경로 설정 (프로젝트 내에서 원하는 위치로 수정)
const outputPath = path.join(__dirname, "public", "sitemap.xml");

// sitemap 생성 옵션 설정
const generator = SitemapGenerator(websiteUrl, {
  filepath: outputPath,
  stripQuerystring: true, // 쿼리 스트링 제거 (옵션)
});

// sitemap 생성 완료 시 이벤트 처리
generator.on("done", () => {
  console.log("Sitemap generated successfully!");
});

// sitemap 생성 시작
generator.start();
