## Commande permettant le téléchargement d'image dans un bucket gcp 

```bash
gsutil -m setmeta -h "Content-Disposition: attachment" 'gs://hieroglyphs/**'
```