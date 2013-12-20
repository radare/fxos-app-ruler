FILES=style.css ruler.js ruler.html index.js index.html *.png manifest.webapp

all:
	rm -f ruler.zip
	zip ruler.zip $(FILES)

push:
	scp packaged.webapp radare.org:/srv/http/ffos/ruler
	scp ruler.zip radare.org:/srv/http/ffos/ruler
