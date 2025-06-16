## Commande permettant le téléchargement d'image dans un bucket gcp 

```bash
gsutil -m setmeta -h "Content-Disposition: attachment" 'gs://hieroglyphs/**'
```

## Pour ouvrir les droits cors à la copy des images 

```bash
gsutil cors set cors.json gs://hieroglyphs
```