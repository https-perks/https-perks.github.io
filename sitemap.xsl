<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="xsl">

  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Gardiner School Sitemap</title>
        <meta charset="UTF-8" />
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 2rem auto;
            max-width: 800px;
            line-height: 1.6;
          }
          h1 {
            text-align: center;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 2rem;
          }
          th, td {
            border: 1px solid #ccc;
            padding: 0.5rem;
            text-align: left;
          }
          th {
            background-color: #f4f4f4;
          }
          tr:nth-child(even) {
            background-color: #f9f9f9;
          }
        </style>
      </head>
      <body>
        <h1>Gardiner School Sitemap</h1>
        <table>
          <thead>
            <tr>
              <th>Page URL</th>
              <th>Last Modified</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="urlset/url">
              <tr>
                <td><a href="{loc}"><xsl:value-of select="loc"/></a></td>
                <td><xsl:value-of select="lastmod"/></td>
                <td><xsl:value-of select="priority"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
