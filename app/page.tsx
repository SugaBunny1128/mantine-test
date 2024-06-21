import { AppShell, AppShellAside, AppShellFooter, AppShellHeader, AppShellMain, AppShellNavbar, Avatar, Burger, Group, Skeleton, Text } from "@mantine/core";

export default function HomePage() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm' }}
      aside={{ width: 300, breakpoint: 'md'}}
      padding="md">
        <AppShellHeader>
          <Group h="100%" px='md'>
            <Avatar>재콩</Avatar>
          </Group>
        </AppShellHeader>
      <AppShellNavbar p="md">
        <Group>
          <Text>Navbar</Text>
        </Group>
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShellNavbar>
      <AppShellMain>
        Alt layout – Navbar and Aside are rendered on top on Header and Footer
      </AppShellMain>
      <AppShellAside p="md">Aside</AppShellAside>
      <AppShellFooter p="md">Footer</AppShellFooter>
    </AppShell>

  );
}
