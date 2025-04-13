<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Gardiner School Sitemap</title>
        <style type="text/css">
          body { font-family: sans-serif; margin: 2rem; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ccc; padding: 0.5rem; }
          th { background-color: #f5f5f5; }
        </style>
      </head>
      <body>
        <h1>Gardiner School Sitemap</h1>
        <table>
          <tr>
            <th>Page URL</th>
            <th>Last Modified</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="s:urlset/s:url">
            <tr>
              <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
              <td><xsl:value-of select="s:lastmod"/></td>
              <td><xsl:value-of select="s:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
