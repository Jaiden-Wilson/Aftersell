export const getLinkProps = (link: any) => {
  if (link?.linktype === 'url') {
    return link?.url;
  }

  if (link?.linktype === 'story') {
    return `/${link?.story?.url}`;
  }

  if (link?.linktype === 'email') {
    return `mailto:${link?.email}`;
  }

  return link?.cached_url || '/';
};
