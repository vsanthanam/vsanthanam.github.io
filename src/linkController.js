class LinkController {

  constructor(name, links) {

    this.name = name;
    this.links = links;

  }

  filteredLinks(filter) {

    var filterString = filter.toUpperCase();

    var results = [];

    if (filterString === "") {

      results = this.links;

    } else {

      for (var i = 0; i < this.links.length; i++) {

        var link = this.links[i];

        var linkMatch = (link.name.toUpperCase().indexOf(filterString) > -1);
        var descMatch = false;

        if (link.desc) {

          descMatch = (link.desc.toUpperCase().indexOf(filterString) > -1);

        }

        if (linkMatch || descMatch) {

          results.push(link);

        }

      }

    }

    return results;

  }

}

export function urlForLink(link) {

  if (link.url === undefined) {

    return "https://" + link.key + ".vsanthanam.com"

  }

  return link.url;

}

export function imageUrlForLink(link) {

  return process.env.PUBLIC_URL + "/icons/" + link.key + ".svg"

}

export default LinkController;
